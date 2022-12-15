exports.handler = async () => {
    const mysec = process.env.MY_SECRET;
    return {
      statusCode: 200,
      body: 'hello world! I have a ' + mysec,
    };
  };
  