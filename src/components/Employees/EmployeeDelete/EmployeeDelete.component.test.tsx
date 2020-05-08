import React from "react";
import EmployeeDelete from "./EmployeeDelete.component"
import TestRenderer, { act } from 'react-test-renderer';

describe('EmployeeDelete', () => {
    it('should be able to display the response', () => {
        const handleDeleteButton = jest.fn()
        let testRenderer = TestRenderer.create(<EmployeeDelete onClick={handleDeleteButton} response={'This is a sample delete response'} />);
        let testInstance = testRenderer.root;
        const deleteResponse = testInstance.findAllByProps({ className: "response" })[0].props.children[1]
        expect(deleteResponse).toEqual('This is a sample delete response')
        expect(deleteResponse).not.toEqual(200)
    });

    it('should be able to call the callback after the button click', () => {
        const handleDeleteButton = jest.fn()
        let testRenderer = TestRenderer.create(<EmployeeDelete onClick={handleDeleteButton} response={'200'} />);
        let testInstance = testRenderer.root;
        act(testInstance.findByProps({ title: 'Call Delete API' }).props.onClick)
        expect(handleDeleteButton).toBeCalled()
    });
});