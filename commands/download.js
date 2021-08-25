import fetch from "node-fetch";

export default (treasureId, options) => {
  let url = "https://doviethoang.com/api/treasures";

  if (treasureId) {
    url += `/${treasureId}`;
  }

  fetch(url).then(async (response) => {
    const data = await response.json();

    if (options.pretty) {
      return console.log(data);
    }

    return console.log(JSON.stringify(data));
  });
};