import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import Sort from "./Sort";
import TopicNav from "./TopicNav";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("desc");
  const { topic_slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(topic_slug, sort, order).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic_slug, sort, order]);

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
