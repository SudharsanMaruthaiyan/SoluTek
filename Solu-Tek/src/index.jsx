import React from "react";
import ReactDOM from 'react-dom';
import "./index.css"
import Body from "./Components/Body/Body";

const AppLayout = ()=>{
    return(
        <>
            <Body/>
        </>
    )
}

// const para = <p>sjlslkfksj</p>

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)