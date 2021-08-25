import fetch from "node-fetch";

export default (postId, options) => {
  let url = "https://jsonplaceholder.typicode.com/posts";

  if (postId) {
    url += `/${postId}`;
  }

  fetch(url).then(async (response) => {
    const data = await response.json();

    if (options.pretty) {
      return console.log(data);
    }

    return console.log(JSON.stringify(data));
  });
};