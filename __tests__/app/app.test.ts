import { testGet } from '../../src/jest/util'

const mockData = [
    {
        testScenario: "test scenario",
        body: {},
        response: {},

    }
]

describe("Test", () => {
    mockData.forEach((eachMockData) => {
        it(eachMockData.testScenario, async () => {
            const res = await testGet(`/test`)
            console.log(res.body, "ressssssssssssssss")
            expect(res.status).toBe(200)
        })
    })
})