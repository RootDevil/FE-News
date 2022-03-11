import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import * as api from "../utils/api";

const CommentCard = ({
  author,
  articleAuthor,
  body,
  createdAt,
  votes,
  commentId,
  setCommentCount,
}) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  const onDelete = () => {
    setIsDeleted(true);
    api
      .deleteCommentById(commentId)
      .then(() => {
        setCommentCount((currentCount) => currentCount - 1);
      })
      .catch((err) => setError(err));
  };

  if (error) {
    return (
      <div className="comment">
        <p>There was a problem deleting the comment.</p>
      </div>
    );
  }

  else if (isDeleted) {
    return (
      <div className="comment">
        <p>Comment deleted.</p>
      </div>
    );
  }

  return (
    <div className="comment">
      <span className="Span-comment-header">
        <h4>{author}</h4>
        <p>{new Date(createdAt).toString().substring(4, 15)}</p>
      </span>
      <p>{body}</p>
      <span className="Span-interaction-panel">
        <ThumbsUpDownIcon aria-label="votes" />
        <p className="comment-bar-text">{votes}</p>
        <Button
          color="error"
          style={{ paddingBottom: 10 }}
          startIcon={<DeleteIcon />}
          onClick={onDelete}
          disabled={author !== user.username && articleAuthor !== user.username}
        >
          Remove
        </Button>
      </span>
    </div>
  );
};

export default CommentCard;
