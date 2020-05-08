import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import Employees from './Employees.container';
import APIService from '../../services/api/api.services';

const mock = new MockAdapter(axios)

describe('Employees', () => {
    afterEach(() => {
        mock.reset()
    })

    describe('handleGetButton', () => {
        it('should be able to call the get function', async () => {
            mock.onGet(APIService.apiBaseURL + "employees").reply(200, {
                data: { "0": { id: 1, employee_name: "AAA" }, "1": { id: 2, employee_name: "BBB" } },
            });
            let testRenderer = TestRenderer.create(<Employees />);
            let testInstance = testRenderer.root;
            await act(testInstance.findByProps({ title: 'Call Get API' }).props.onClick)
            const employeeListLength = testInstance.findByProps({ className: "employees-list" }).props.children.length
            expect(employeeListLength).toEqual(2)
        });
    });

    describe('handlePostButton', () => {
        it('should be able to call the post function', async () => {
            mock.onPost(APIService.apiBaseURL + "create").reply(200);
            let testRenderer = TestRenderer.create(<Employees />);
            let testInstance = testRenderer.root;
            await act(testInstance.findByProps({ title: 'Call Add API' }).props.onClick)
            const postResponse = testInstance.findAllByProps({ className: "response" })[0].props.children[1]
            expect(postResponse).toEqual(200 + '')
        });
    });

    describe('handlePutButton', () => {
        it('should be able to call the put function', async () => {
            mock.onPut(APIService.apiBaseURL + "update/21").reply(200);
            let testRenderer = TestRenderer.create(<Employees />);
            let testInstance = testRenderer.root;
            await act(testInstance.findByProps({ title: 'Call Edit API' }).props.onClick)
            const putResponse = testInstance.findAllByProps({ className: "response" })[1].props.children[1]
            expect(putResponse).toEqual(200 + '')
        });
    });

    describe('handleDeleteButton', () => {
        it('should be able to call the delete function', async () => {
            mock.onDelete(APIService.apiBaseURL + "delete/2").reply(200);
            let testRenderer = TestRenderer.create(<Employees />);
            let testInstance = testRenderer.root;
            await act(testInstance.findByProps({ title: 'Call Delete API' }).props.onClick)
            const deleteResponse = testInstance.findAllByProps({ className: "response" })[2].props.children[1]
            expect(deleteResponse).toEqual(200 + '')
        });
    });
});