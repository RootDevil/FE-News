import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const CommentCard = ({ author, articleAuthor, body, createdAt, votes }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const { user } = useContext(UserContext);
  
  const onDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted)
    return (
      <div className="comment">
        <p>Comment deleted.</p>
      </div>
    );

  return (
    <div className="comment">
      <span className="Span-comment-header">
        <h4>{author}</h4>
        <p>{new Date(createdAt).toString().substring(4, 15)}</p>
      </span>
      <p>{body}</p>
      <span className="Span-interaction-panel">
        <ThumbsUpDownIcon aria-label="votes" />
        <p className="widget-text">{votes}</p>
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
