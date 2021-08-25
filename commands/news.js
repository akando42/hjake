import fetch from "node-fetch";
import open from "open";

export default (newsID, options) => {
  let url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
  let uniqueURL = 'https://hacker-news.firebaseio.com/v0/item/';

  async function getNews(){
    const news = [];
    const data = await fetch(url).then(response => response.json());
    let topNews = data.slice(0,10);
    
    const topURLs =topNews.map(newID => {
      const newsURL = uniqueURL + newID +".json?print=pretty";
      return newsURL;
    }) 

    for (url of topURLs){
      const newsJSON = await fetch(url).then(response => response.json());  
      const newsURL = newsJSON.url;
      console.log("OPENNING: "+newsURL);
      await open(newsURL);
    } 
    return news;
  }

  getNews().then(response => {
    return response;
  })
};