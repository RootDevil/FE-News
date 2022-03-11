import { CircularProgress, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../utils/api";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";
import ExpansionWrapper from "./ExpansionWrapper";

const Comments = ({ articleId, setCommentCount, articleAuthor }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

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
      <AddComment
        articleId={articleId}
        setComments={setComments}
        setIsPosting={setIsPosting}
        setCommentCount={setCommentCount}
      />
      {isPosting ? (
        <Skeleton sx={{ height: 50 }} variant="rectangular" />
      ) : null}
      {comments.slice(0, 3).map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            commentId={comment.comment_id}
            author={comment.author}
            articleAuthor={articleAuthor}
            body={comment.body}
            createdAt={comment.created_at}
            votes={comment.votes}
            setCommentCount={setCommentCount}
          />
        );
      })}
      <ExpansionWrapper>
        {comments.slice(3).map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              commentId={comment.comment_id}
              author={comment.author}
              articleAuthor={articleAuthor}
              body={comment.body}
              createdAt={comment.created_at}
              votes={comment.votes}
              setCommentCount={setCommentCount}
            />
          );
        })}
      </ExpansionWrapper>
    </section>
  );
};

export default Comments;
