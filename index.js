exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Hello from Lambda! I am attaching API to access and automate the process.",
    }),
  };
};
