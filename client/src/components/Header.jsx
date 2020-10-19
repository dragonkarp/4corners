//got emoji from getemoji.com
import React, { useState } from "react";
import Modal from "react-modal";
import API from "../utils/API";

const Header = () => {

    const [show, setShow] = useState(false);
    const [assignee, setAssignee] = useState([]);

    const OnOpen = () => setShow(true);
    const onClose = () => setShow(false);

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

            console.log("assigneeOptions: ", assignee)
    };


    return (
        <div className={"row"}>
            <p className={"page-header"}> Four Corners Dashboard <button onClick={OnOpen} className="btn btn-md btn-primary">Create Task</button></p>
            <OpenModal
                onClose={onClose}
                show={show}
                assigneeOptions={assigneeOptions}
                assignee={assignee}
            />
        </div>
    )

}

export default Header;


function OpenModal(props) {

    console.log("props when modal opens", props)

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
                <h2 style={{ textAlign: "left", paddingLeft: "80px" }}>Title</h2>
                <input type='text' style={{ textAlign: "left", paddingLeft: "80px" }}></input>
                <h2 style={{ textAlign: "left", paddingLeft: "80px" }}>Description</h2>
                <input type='text' style={{ textAlign: "left", paddingLeft: "80px" }}></input>
                <p style={{ textAlign: "left", paddingLeft: "80px" }}>Assign to: </p>
                <select onClick={props.assigneeOptions} class="browser-default custom-select custom-select-lg mb-3">
                    {props.assignee.map(assignee => {
                        console.log("assigned to options: ", assignee)
                    })}
                </select>
            </div>

        </Modal>
    )


}



