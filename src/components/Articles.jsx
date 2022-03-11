import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";
import Sort from "./Sort";
import TopicNav from "./TopicNav";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("desc");
  const { topic_slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchArticles(topic_slug, sort, order)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topic_slug, sort, order]);

  if (error) return <ErrorPage error={error} />

  return (
    <section className="Articles">
      <TopicNav />
      <Sort
        topic={topic_slug}
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
      />
      {isLoading ? (
        <CircularProgress color="primary" />
      ) : (
        <section className="Articles-grid">
          {articles.length === 0 ? <p>No articles exist for that topic.</p> : null}
          {articles.map((article) => {
            return (
              <ArticleCard
                key={`article-${article.article_id}`}
                articleId={article.article_id}
                title={article.title}
                topic={article.topic}
                created_at={article.created_at}
                votes={article.votes}
                comment_count={article.comment_count}
              />
            );
          })}
        </section>
      )}
    </section>
  );
};

export default Articles;
