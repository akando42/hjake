import fetch from "node-fetch";
import open from "open";

export default (newsID, options) => {
  console.time("getNews");
  let url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
  let uniqueURL = 'https://hacker-news.firebaseio.com/v0/item/';

  async function getNews(){
    const topURLs = await fetch(url)
      .then(response => response.json())
      .then(data => {
        let topNum = Math.round(data.length * 0.21)
        if (topNum > 21){
          topNum = 21;
        } 
        return data.slice(0,topNum);
      })
      .then(topNews => {
        return topNews.map(newID => uniqueURL + newID +".json?print=pretty");
      })
      .catch(error => console.error(error));

    const news = topURLs.map(async url => {
      await fetch(url)
        .then(response => response.json())
        .then(newsJSON => newsJSON.url)
        .then(newsURL => {
          if(newsURL){
            news.push(newsURL);
            open(newsURL);
            return newsURL;
          } else {
            console.log("Missing URL");
            return "Missing URL";
          }
        })
        .catch(error => console.error(error))
    })

    // for (url of topURLs){
    //   await fetch(url)
    //     .then(response => response.json())
    //     .then(newsJSON => {
    //       news.push(newsJSON.url);
    //       return newsJSON.url;
    //     })
    //     .then(newsURL => open(newsURL))
    //     .catch(error => console.error(error))
    // } 

    return news;
  };

  getNews().then(response => {
    console.log("RESPONSE", response);
    console.timeEnd("getNews");
    return response;
  })
}

