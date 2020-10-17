
import React from "react";

/* dnd modules */
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

import Homepage from "./Homepage";
import Header from "../components/Header";

import dnd from "../style/dnd.css";


function Team() {
//  return ( <h1>Hi team</h1>);
    return (

        <DndProvider className={dnd} backend={HTML5Backend}>
        <Header />
        <Homepage className={dnd}/>
        </DndProvider>
    );
}

export default Team;
