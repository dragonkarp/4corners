//this is the wrapper for the column blocks inprogress, done, review etc..
//all this component does is to highlight the right column block when it's hovered over
import React from "react";

const Col = ({isOver, children}) => {

    //this indicates that the item is over that particular column block
    const className = isOver ? " highlight-region" : "";

    return(
        <div className = {`col${className}`}>
            {children}
        </div>
    );
};

export default Col;