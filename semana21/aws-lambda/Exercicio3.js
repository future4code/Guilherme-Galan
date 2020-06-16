exports.handler = async (event) => {
    const response = {
        body: event.n1 + event.n2,
    };
    return response;
};