import React from "react";
import EmployeeList from "./EmployeeList.component"
import TestRenderer, { act } from 'react-test-renderer';

describe('EmployeeList', () => {
    it('should be able to display the response', () => {
        const handleGetButton = jest.fn()
        const employees = [{ id: 1, employee_name: "AAA" }, { id: 2, employee_name: "BBB" }]
        let testRenderer = TestRenderer.create(<EmployeeList onClick={handleGetButton} employees={employees} />);
        let testInstance = testRenderer.root;
        const employeesLength = testInstance.findAllByProps({ className: "employees-list" })[0].props.children.length
        expect(employeesLength).toEqual(2)
    });

    it('should be able to call the callback after the button click', () => {
        const handleGetButton = jest.fn()
        let testRenderer = TestRenderer.create(<EmployeeList onClick={handleGetButton} employees={[]} />);
        let testInstance = testRenderer.root;
        act(testInstance.findByProps({ title: 'Call Get API' }).props.onClick)
        expect(handleGetButton).toBeCalled()
    });
});