import React from "react";
import Modal from "react-modal";
import dnd from "../style/dnd.css";

//needs to get an id for the root of the app
Modal.setAppElement("#root");

//show: whether to show the window
//onClose: when you close the window
//what item to display
const Window = ({ show, onClose, item }) => {

console.log("Window.jsx " + show);

//    return ( <Modal> something </Modal> )


    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal_overlay dnd"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                {/* this is going to take up 90% of the row */}
                <h2 style={{ flex: "1 90%" , textAlign: "center", color: "darkblue" }}>Task Title: {item.title}</h2>
                <button className={"close-btn"} onClick={onClose}>X</button>
            </div>
            <div className="modalBox">
            <br></br>
                <h3 style={{ textAlign: "left", paddingLeft: "80px" }}>Description</h3>
                <p  style={{ textAlign: "left", paddingLeft: "80px" }}>{item.description}</p>
                <p  style={{ textAlign: "left", paddingLeft: "80px" }}><strong>Assigned To: </strong>{item.user}</p>
                <h5 style={{ textAlign: "right", paddingRight: "100px" }}>Status</h5>
                {/* this just capitalizes the status */}
                <p style={{ textAlign: "right", paddingRight: "100px" }}>{item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}</p>
            </div>

        </Modal>
    )

}

export default Window;
