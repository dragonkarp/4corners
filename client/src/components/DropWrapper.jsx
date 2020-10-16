// this is the parent container that holds the column block and the items div
import React from "react";
import {useDrop} from "react-dnd";
import ITEM_TYPE from "../data/types";
import {statuses} from '../data';

const DropWrapper = ({onDrop, children, status}) => {
    //it gives us an object as the first var so we are going to destructure it
    //and only pick out drop that is needed
    const [{isOver}, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            const itemIndex  = statuses.findIndex(si => si.status == item.status.toLowerCase())
            // when we drag the items over the columns (highlighted)
            // we need to know the index of the item to check whether they can be dropped or not
            // if the index is next to each other then accept the drop

            const statusIndex = statuses.findIndex(si => si.status == status)
            return[itemIndex +1, itemIndex -1, itemIndex].includes(statusIndex);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <div ref={drop} className={"drop-wrapper"}>
        {/* we are passing children. wrapper to say drop is okay or not */}
        {/* you can drop stuff into that particular html  */}
        {/* clone is used to pass down state to the children */}
            {React.cloneElement(children, {isOver})}
        </div>
    )

}

export default DropWrapper;
