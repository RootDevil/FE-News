import { useEffect, useState } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <section className="Articles">
      {articles.map((article, index) => {
        return <ArticleCard 
            key={`article-${index}`} 
            title={article.title}
            topic={article.topic}
            author={article.author}
            votes={article.votes}
            comment_count={article.comment_count} />;
      })}
    </section>
  );
};

export default Articles;
