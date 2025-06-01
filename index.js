exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Hello from Lambda! I am attaching API through API Gateway and now learning about Stages.",
    }),
  };
};
