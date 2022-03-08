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

export const fetchArticleById = (articleId) => {
  return axios
    .get(`https://slurpy-nc-news.herokuapp.com/api/articles/${articleId}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://slurpy-nc-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const updateVotesByArticleId = (articleId, vote) => {
  return axios.patch(
    `https://slurpy-nc-news.herokuapp.com/api/articles/${articleId}`,
    {
      inc_votes: vote
    }
  );
};
