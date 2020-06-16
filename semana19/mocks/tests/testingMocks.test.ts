describe("Testing Mocks", () => {
    test("Mock that returns true", () => {
        const mock = jest.fn(() => {
            return true
        })
    });

    test("Mock that returns false", () => {
        const mock = jest.fn(() => {
            return false
        })
    });
})