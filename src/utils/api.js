import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://slurpy-nc-news.herokuapp.com/api/articles")
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
