"use strict";

const uuid = require("uuid");
const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies
var Twit = require("twit");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.name !== "string") {
    console.error("Validation failed: Name is required.");
    callback(new Error("Couldn't create the item."));
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      name: data.name,
      session_var: process.env.SESSION_KEY,
      createdAt: timestamp,
      updatedAt: timestamp
    }
  };

  var bot = new Twit({
    consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
    consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
    access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
    access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
  });

  bot.post("statuses/update", { status: data.name }, function(
    err,
    data,
    response
  ) {
    if (err) {
      console.log(err);
    } else {
      console.log(data.text + " was tweeted.");
    }
  });

  // write to the database
  dynamoDb.put(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error("Couldn't create the asana item."));
      return;
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item)
    };
    callback(null, response);
  });
};
