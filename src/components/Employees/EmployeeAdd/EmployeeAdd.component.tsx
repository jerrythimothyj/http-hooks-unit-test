import React from "react";

const EmployeeAdd = (props: { onClick: Function, response: string }) => {
    return (
        <>
            <div>
                <button onClick={(event) => props.onClick(event)} title="Call Add API">Call Add API</button>
            </div>
            <div><span className="response">Add Response: {props.response}</span></div>
        </>
    )
}

export default EmployeeAdd;