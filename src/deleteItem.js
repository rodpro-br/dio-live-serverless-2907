"use strict";
const AWS = require("aws-sdk");

const deleteItem = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {id} = event.pathParameters

    try {
        const result = await dynamodb.delete({
            TableName: "ItemTable",
            Key: {id}
        }).promise();

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Item deleted'}),
    };
};

module.exports = {
    handler: deleteItem,
};
