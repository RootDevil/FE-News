import { useEffect, useState } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import TopicNav from "./TopicNav";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <section className="Articles">
      <TopicNav />
      <section className="Articles-grid">
        {articles.map((article) => {
          return (
            <ArticleCard
              key={`article-${article.article_id}`}
              title={article.title}
              topic={article.topic}
              author={article.author}
              votes={article.votes}
              comment_count={article.comment_count}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Articles;
