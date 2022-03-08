import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import TopicNav from "./TopicNav";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();

  useEffect(() => {
    api.fetchArticles(topic_slug).then((articles) => {
      setArticles(articles);
    });
  }, [topic_slug]);

  return (
    <section className="Articles">
      <TopicNav />
      <section className="Articles-grid">
        {articles.map((article) => {
          return (
            <ArticleCard
              key={`article-${article.article_id}`}
              articleId={article.article_id}
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
