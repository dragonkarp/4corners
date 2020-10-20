//got emoji from getemoji.com
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import API from "../utils/API";

const Header = () => {

    const [show, setShow] = useState(false);
    // const [assignee, setAssignee] = useState([]);

    const OnOpen = () => setShow(true);
    const onClose = () => setShow(false);

    // function assigneeOptions() {
    //     API.getTasks()
    //         .then(res => {
    //             console.log("getting assigneeOptions: ", res.data);
    //             setAssignee(res.data.map(task => {
    //                 console.log(task.user);
    //                 return (
    //                     [...assignee, task.user]
    //                     )
    //             }))
    //         })
    //         .catch(err => console.log(err));

    //         console.log("assigneeOptions: ", assignee)
    // };


    return (
        <div className={"row"}>
            <p className={"page-header"}> Four Corners Dashboard <button onClick={OnOpen} className="btn btn-md btn-primary">Create Task</button></p>
            <OpenModal
                onClose={onClose}
                show={show}
            />
        </div>
    )

}

export default Header;


function OpenModal(props) {

    const [assignee, setAssignee] = useState([]);

    useEffect(() => {
        assigneeOptions();
        }, [])

    function assigneeOptions() {
        API.getTasks()
            .then(res => {
                console.log("getting assigneeOptions: ", res.data);
                setAssignee(res.data.map(task => {
                    console.log(task.user);
                    return (
                        [...assignee, task.user]
                        )
                }))
            })
            .catch(err => console.log(err));
    };

      // Login user functions.
  const [creatingTask, setCreatingTask] = useState({
    user: "",
    title: "",
    description: "",
    status: "Open",
    icon: "⭕️",
    lastUpdated: new Date(Date.now())
  });

  const handleInputChange = e => {
    const {name, value} = e.target
    setCreatingTask({ ...creatingTask, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("task created after clicking submit: ", creatingTask)

    API.saveTask(creatingTask)
    .then(res => {
      if (res.status===200){
        console.log("posted successfully");
      }
    }
      )
  }


    return (
        //api and how its setup and that's where the below 
        //propnames
        //overlay is to make the rest of the area dark
        <Modal
            isOpen={props.show}
            onRequestClose={props.onClose}
            className={"modal_overlay"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                {/* this is going to take up 90% of the row */}
                <h2 style={{ flex: "1 90%", textAlign: "center", color: "darkblue" }}>Create New Task</h2>
                <button className={"close-btn"} onClick={props.onClose}>X</button>
            </div>
            <div>
                <br></br>
                <form>
                <h2 style={{ textAlign: "left", paddingLeft: "80px" }}>Title</h2>
                <input name="title" type="text" placeholder="Title" onChange={handleInputChange} type='text' style={{ textAlign: "left", paddingLeft: "80px" }}></input>
                <h2 style={{ textAlign: "left", paddingLeft: "80px" }}>Description</h2>
                <input name="description" type="text" placeholder="Description" onChange={handleInputChange} type='text' style={{ textAlign: "left", paddingLeft: "80px" }}></input>
                <h4>status: "Open"</h4>
                <h4>icon: ⭕️</h4>
                <p style={{ textAlign: "left", paddingLeft: "80px" }}>Assign to: </p>
                <select name="user" type="text" onChange={handleInputChange} class="browser-default custom-select custom-select-lg mb-3">
                {assignee.map(assignee => {
                        console.log("assigned to options: ", assignee)
                        return(
                        <option value={assignee}>{assignee}</option>
                        )
                    })}
                </select>
                </form>
                <button onClick={handleSubmit}>Submit</button>

            </div>

        </Modal>
    )


}



