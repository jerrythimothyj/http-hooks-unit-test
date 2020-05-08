import React from "react";

const EmployeeDelete = (props: { onClick: Function, response: string }) => {
    return <>
        <div>
            <button onClick={(event) => props.onClick(event)} >Call Delete API</button>
        </div>
        <div><span className="response">Delete Response: {props.response}</span></div>
    </>
}

export default EmployeeDelete;