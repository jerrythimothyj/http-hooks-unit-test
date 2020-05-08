import APIService from "./api.services"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)

describe('APIService', () => {
    afterEach(() => {
        mock.reset()
    })

    it("it should be able to call a get api based on the given url", async () => {
        mock.onGet(APIService.apiBaseURL + "employees").reply(200, [{ id: 1, employee_name: "AAA" }]);
        const apiResponse = await APIService.get('employees')
        expect(apiResponse.data.length).toBe(1);
    })

    it("it should be able to call a post api based on the given url and body", async () => {
        mock.onPost(APIService.apiBaseURL + "create").reply(200);
        const apiResponse = await APIService.post('create', { "name": "test", "salary": "123", "age": "23" })
        expect(apiResponse.status).toBe(200);
    })

    it("it should be able to call a put api based on the given url and body", async () => {
        mock.onPut(APIService.apiBaseURL + "update/21").reply(200);
        const apiResponse = await APIService.put('update/21', { "name": "test1", "salary": "1123", "age": "23" })
        expect(apiResponse.status).toBe(200);
    })

    it("it should be able to call a delete api based on the given url", async () => {
        mock.onDelete(APIService.apiBaseURL + "delete/2").reply(200);
        const apiResponse = await APIService.delete('delete/2')
        expect(apiResponse.status).toBe(200);
    })
})