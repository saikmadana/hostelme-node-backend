import { testGet } from '../../src/jest/util'

const mockData = [
    {
        testScenario: "Success scenario of get rooms",
        body: {},
        response: {},

    }
]

describe("Test Get Rooms", () => {
    mockData.forEach((eachMockData) => {
        it(eachMockData.testScenario, async () => {
            const res = await testGet(`/api/room`)
            console.log(res.body, "ressssssssssssssss")
            expect(res.status).toBe(200)
            expect(res.body.status).toBeTruthy()
            expect(res.body.data.length).toBeGreaterThan(0)
        })
    })
});