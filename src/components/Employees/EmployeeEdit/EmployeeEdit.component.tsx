import React from "react";

const EmployeeEdit = (props: { onClick: Function, response: string }) => {
    return <>
        <div >
            <button onClick={(event) => props.onClick(event)} title="Call Edit API">Call Edit API</button>
        </div>
        <div ><span className="response">Edit Response: {props.response}</span></div>
    </>
}

export default EmployeeEdit;