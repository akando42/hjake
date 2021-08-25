import fetch from "node-fetch";

export default (userId, options) => {
  let url = "https://jsonplaceholder.typicode.com/users";

  if (userId) {
    url += `/${userId}`;
  }

  fetch(url).then(async (response) => {
    const data = await response.json();

    if (options.pretty) {
      return console.log(data);
    }

    return console.log(JSON.stringify(data));
  });
};