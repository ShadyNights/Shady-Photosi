const axios = require("axios");

exports.handler = async (event) => {
  const query = event.rawQuery || ""; // forwards query parameters
  const isVideo = event.queryStringParameters?.type === "video";

  const url = isVideo
    ? `https://api.pexels.com/videos/search?${query}`
    : `https://api.pexels.com/v1/search?${query}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch from Pexels" }),
    };
  }
};
