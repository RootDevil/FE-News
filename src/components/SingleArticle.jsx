import { Button, CircularProgress } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../utils/api";
import InteractionPanel from "./InteractionPanel";
import StyledLink from "./StyledLink";
import Comments from "./Comments";
import ErrorPage from "./ErrorPage";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const navigate = useNavigate();
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setCommentCount(article.comment_count);
        setIsLoading(false);
      })
      .catch(({response: { data }}) => setError(data));
  }, [article_id]);

  if (error) return <ErrorPage error={error} />

  if (isLoading) return <CircularProgress color="primary" />;

  return (
    <section className="Section-Single-Article">
      <header className="Header-Section-Title">
        <h2>{article.title}</h2>
        <span className="Article-title-span">
          <Button
            onClick={() => {
              navigate(-1);
            }}
            variant="text"
            startIcon={<KeyboardBackspaceIcon />}
          >
            Back
          </Button>
          |{" "}
          <StyledLink to={`/topics/${article.topic}`} color="black">
            {article.topic}
          </StyledLink>
        </span>
      </header>
      <section className="Article-body">
        <span>
          <i>{article.author}</i> |{" "}
          {new Date(article.created_at).toString().substring(0, 15)}
        </span>
        <p className="Article-section-body">{article.body}</p>
      </section>
      <InteractionPanel
        articleId={article.article_id}
        votes={article.votes}
        author={article.author}
        commentCount={commentCount}
        showComments={showComments}
        setShowComments={setShowComments}
      />
      {showComments ? (
        <Comments articleId={article_id} setCommentCount={setCommentCount} />
      ) : null}
    </section>
  );
};

export default SingleArticle;
