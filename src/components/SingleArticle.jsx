import { Button } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../utils/api";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    api.fetchArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <section className="Section-Single-Article">
      <header className="Header-Section-Title">
        <h2>{article.title}</h2>
        <span className="Article-title-span">
          <Link to="/">
            <Button variant="text" startIcon={<KeyboardBackspaceIcon />}>
              Back
            </Button>
          </Link>
          | <Link to={`/topics/${article.topic}`}>{article.topic}</Link>
        </span>
      </header>
      <section className="Article-body">
        <span>
          <i>{article.author}</i> | {new Date(article.created_at).toString().substring(0, 15)}
        </span>
        <p className="Article-section-body">{article.body}</p>
      </section>
    </section>
  );
};

export default SingleArticle;
