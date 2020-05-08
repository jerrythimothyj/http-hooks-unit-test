import React from "react";
import EmployeeEdit from "./EmployeeEdit.component"
import TestRenderer, { act } from 'react-test-renderer';

describe('EmployeeEdit', () => {
    it('should be able to display the response', () => {
        const handleEditButton = jest.fn()
        let testRenderer = TestRenderer.create(<EmployeeEdit onClick={handleEditButton} response={'This is a sample edit response'} />);
        let testInstance = testRenderer.root;
        const editResponse = testInstance.findAllByProps({ className: "response" })[0].props.children[1]
        expect(editResponse).toEqual('This is a sample edit response')
        expect(editResponse).not.toEqual(200)
    });

    it('should be able to call the callback after the button click', () => {
        const handleEditButton = jest.fn()
        let testRenderer = TestRenderer.create(<EmployeeEdit onClick={handleEditButton} response={'200'} />);
        let testInstance = testRenderer.root;
        act(testInstance.findByProps({ title: 'Call Edit API' }).props.onClick)
        expect(handleEditButton).toBeCalled()
    });
});