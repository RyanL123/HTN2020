exports.handler = async function (event, context) {
    if (event.body) {
        console.log(JSON.parse(event.body));
    }
    return {
        statusCode: 200,
    };
};
