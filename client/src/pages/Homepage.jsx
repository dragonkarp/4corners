import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
//import { data, statuses } from "../data";
import dnd from "../style/dnd.css";
import API from "../utils/API";

const statuses = [{
    status: "open",
    icon: "⭕️",
    color: "#EB5A46"
}, {
    status: "in progress",
    icon: "🔆️",
    color: "#00C2E0"
}, {
    status: "in review",
    icon: "📝",
    color: "#C377E0"
}, {
    status: "done",
    icon: "✅",
    color: "#3981DE"
}];



const Homepage = () => {

    const [items, setItems] = useState([]);
    console.log("items: ", items);

    useEffect(() => {
        loadTasks();
    }, []);

    function loadTasks() {
        // Add code here to get all books from the database and store them using setBooks
        API.getTasks()
            .then((res) => {
                setItems(res.data)
            })
            .catch(err => console.log(err))

    }

    // this is to update statuses when we move the items
    const onDrop = async (item, monitor, status) => {
        const mapping = statuses.find(si => si.status == status.toLowerCase());
        let newItems = [];

        await setItems(prevState => {
            newItems = prevState
                .filter(i => i._id !== item._id)
                .concat({ ...item, status, icon: mapping.icon });
            console.log("new items: ", ...newItems);
            console.log([...newItems]);

            return [...newItems];
        });

        console.log("data to send: ", newItems.filter(i => i._id == item._id));

        const dataToPost = newItems.filter(i => i._id == item._id);

        await API.updateTask(item._id, {
            description: dataToPost[0].description,
            icon: dataToPost[0].icon,
            lastUpdated: Date(),
            status: dataToPost[0].status,
            title: dataToPost[0].title,
            user: dataToPost[0].user,
            _id: dataToPost[0]._id
        })
            .then((res) => {
                alert("Task Saved Successfully!!")
            })
            .catch(err => console.log(err))

    }

    const moveItem = (dragIndex, hoverIndex) => {
        console.log("moveItem")
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        });
    };

    


    return (
        <div className={"row"}>
            {/* creates the column blocks */}
            {statuses.map(s => {
                return (
                    <div key={s.status} className={"col-wrapper dnd"}>
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {items
                                    .filter(i => i.status.toLowerCase() == s.status)
                                    .map((i, idx) => <Item key={i._id} item={i} index={idx} moveItem={moveItem} status={s} />)}
                            </Col>
                        </DropWrapper>
                    </div>
                )
            })}
        </div>
    );
};

export default Homepage;
