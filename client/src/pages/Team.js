
import React, {useState, useEffect} from "react";
import API from "../utils/API";

/* dnd modules */
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

import Homepage from "./Homepage";
import Header from "../components/Header";

import dnd from "../style/dnd.css";


function Team() {
//  return ( <h1>Hi team</h1>);

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

    return (

        <DndProvider className={dnd} backend={HTML5Backend}>
        <Header loadTasks={loadTasks}/>
        <Homepage items={items} setItems={setItems} className={dnd}/>
        </DndProvider>
    );
}

export default Team;
