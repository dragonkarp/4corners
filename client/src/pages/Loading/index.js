import React from "react";

const Loading = () => {
    return (
        <>
            <div className="spinner-grow text-success" role="status" style={{ justifyContent: "center" }}>
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status" style={{ justifyContent: "center" }}>
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status" style={{ justifyContent: "center" }}>
                <span className="sr-only">Loading...</span>
            </div>
        </>
    );
}

export default Loading;