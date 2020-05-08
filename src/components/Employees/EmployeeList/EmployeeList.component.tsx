import React from "react";

const EmployeeList = (props: { onClick: Function, employees: any }) => {
    return <>
        <div >
            <button onClick={(event) => props.onClick(event)}> Call Get API</button>
        </div>
        <div className="employees-list">
            {
                props.employees.map((employee: any) => {
                    return (<div key={employee.id}>
                        <span>
                            {employee.employee_name}
                        </span>
                    </div>)
                })
            }
        </div>
    </>
}

export default EmployeeList;