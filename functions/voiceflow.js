exports.handler = async function (event, context, callback) {
    const { number } = JSON.parse(event.body);
    console.log(number);
    return {
        statusCode: 200,
        body: "Number:" + number.toString(),
    };
};
