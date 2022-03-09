import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import ExpansionWrapper from "./ExpansionWrapper";

const Comments = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.fetchCommentsByArticleId(articleId).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [articleId]);

  if (isLoading) return <CircularProgress color="primary" />;

  return (
    <section className="Section-comments">
      {comments.slice(0, 3).map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            author={comment.author}
            body={comment.body}
            createdAt={comment.created_at}
            votes={comment.votes}
          />
        );
      })}
      <ExpansionWrapper>
      {comments.slice(3).map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            author={comment.author}
            body={comment.body}
            createdAt={comment.created_at}
            votes={comment.votes}
          />
        );
      })}
      </ExpansionWrapper>
    </section>
  );
};

export default Comments;
