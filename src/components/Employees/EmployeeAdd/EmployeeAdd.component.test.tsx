import React from "react";
import EmployeeAdd from "./EmployeeAdd.component"
import TestRenderer, { act } from 'react-test-renderer';

describe('EmployeeAdd', () => {
    it('should be able to display the response', () => {
        const handlePostButton = jest.fn()
        let testRenderer = TestRenderer.create(<EmployeeAdd onClick={handlePostButton} response={'This is a sample post response'} />);
        let testInstance = testRenderer.root;
        const postResponse = testInstance.findAllByProps({ className: "response" })[0].props.children[1]
        expect(postResponse).toEqual('This is a sample post response')
        expect(postResponse).not.toEqual(200)
    });

    it('should be able to call the callback after the button click', () => {
        const handlePostButton = jest.fn()
        let testRenderer = TestRenderer.create(<EmployeeAdd onClick={handlePostButton} response={'200'} />);
        let testInstance = testRenderer.root;
        act(testInstance.findByProps({ title: 'Call Add API' }).props.onClick)
        expect(handlePostButton).toBeCalled()
    });
});




