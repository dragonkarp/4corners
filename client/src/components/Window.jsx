import React from "react";
import Modal from "react-modal";

//needs to get an id for the root of the app
Modal.setAppElement("#root");

//show: whether to show the window
//onClose: when you close the window
//what item to display
const Window = ({ show, onClose, item }) => {

console.log("Window.jsx " + show);

//    return ( <Modal> something </Modal> )


    return (
        //api and how its setup and that's where the below 
        //propnames
        //overlay is to make the rest of the area dark
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                {/* this is going to take up 90% of the row */}
                <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
                <button className={"close-btn"} onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Description</h2>
                <p>{item.content}</p>
                <h2>Status</h2>
                {/* this just capitalizes the status */}
                <p>{item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}</p>
            </div>

        </Modal>
    )

}

export default Window;
