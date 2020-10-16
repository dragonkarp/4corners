//item is only responsible for moving the items within the 
//column block or other column blocks

import React, {Fragment, useState, useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";

const Item = ({item, index, moveItem, status}) => {
    const ref = useRef(null);

    //react-dnd hooks
    const [, drop ] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            //logic for hovering over another column provided by react-dnd
            if (!ref.current){
                return;
            }

            const dragIndex = item.index;
            //the index of the item that we hover over
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            //get the position of the hovered rectangle
            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) /2;
            //get mouse position whereever we are dragging on the screen
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            //if dragged item is less than the item it's hovered over, no movement is necessary
            //if dragged item is more than another item it hovers over, 
            //then the dragged item will be moved down to the next block
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY){
                return;
            }

            //same as the above, but here the dragged item is travelling upwards
            if(dragIndex > hoverIndex && hoverClientY < hoverMiddleY){
                return;
            }

            //this is to change where the item is in the same column
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;

        }
    });

    const [{isDragging}, drag] = useDrag({
        item: {type:ITEM_TYPE, ...item, index },
        //collect gives props and data that dnd supplies
        collect: monitor =>({
        // 1 of the props is the monitor - which is a copy of the monitor
        //tells us if we are dragging the item or not
            isDragging: monitor.isDragging()
        })

    })

    
    const [show, setShow] = useState(false);

    //for opening the modal when you click on the item
    const onOpen = () => setShow(true);
    const onClose = () => setShow(false);

    //this gives us a way to locate the html we are working with
    drag(drop(ref));

    return(
        <Fragment>
            <div
            ref={ref}
            style={{opacity: isDragging ? 0: 1}}
            className={"item"}
            onClick={onOpen}
            >
            {/* //this is the rectangular color block */}
            <span className={"color-bar"} style={{backgroundColor: status.color}}></span>
            {/* title of the item */}
            <div className={"item-title"}>{item.title}</div>
            <span className={"item-status"}>Status: {item.icon}</span>
            </div>
            {/* this is the modal */}
            <Window
            item={item}
            onClose={onClose}
            show={show}
            />
        </Fragment>
    )
}

export default Item;