import React, { useCallback, useState } from 'react';
import APIService from '../../services/api/api.services';
import EmployeeEdit from '../../components/Employees/EmployeeEdit/EmployeeEdit.component';
import EmployeeList from '../../components/Employees/EmployeeList/EmployeeList.component';
import EmployeeAdd from '../../components/Employees/EmployeeAdd/EmployeeAdd.component';
import EmployeeDelete from '../../components/Employees/EmployeeDelete/EmployeeDelete.component';

const Employees = () => {
    const [getResponse, setGetResponse] = useState([])
    const [postResponse, setPostResponse] = useState('')
    const [putResponse, setPutResponse] = useState('')
    const [deleteResponse, setDeleteResponse] = useState('')

    const handleGetButton = useCallback(async () => {
        let response = await APIService.get('employees')
        setGetResponse(Object.values(response.data.data))
    }, [])

    const handlePostButton = useCallback(async () => {
        let response = await APIService.post('create', { "name": "test", "salary": "123", "age": "23" })
        setPostResponse(response.status + '')
    }, [])

    const handlePutButton = useCallback(async () => {
        let response = await APIService.put('update/21', { "name": "test1", "salary": "1123", "age": "23" })
        setPutResponse(response.status + '')
    }, [])

    const handleDeleteButton = useCallback(async () => {
        let response = await APIService.delete('delete/2')
        setDeleteResponse(response.status + '')
    }, [])

    return (
        <>
            <EmployeeAdd onClick={handlePostButton} response={postResponse} />
            <EmployeeEdit onClick={handlePutButton} response={putResponse} />
            <EmployeeDelete onClick={handleDeleteButton} response={deleteResponse} />
            <EmployeeList onClick={handleGetButton} employees={getResponse} />
        </>
    )
}

export default Employees