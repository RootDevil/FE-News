import axios from "axios";

export const fetchArticles = (topic) => {
  return axios
    .get("https://slurpy-nc-news.herokuapp.com/api/articles", {
      params: {
        topic: topic,
      },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://slurpy-nc-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};
