import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";
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
  const [commentVotes, setCommentVotes] = useState(votes);
  const [votesChange, setVotesChange] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState(null);
  const [voteError, setVoteError] = useState(null);
  const { user } = useContext(UserContext);

  const handleVotes = (votecrement) => {
    setCommentVotes((currentVotes) => currentVotes + votecrement);
    setVotesChange((currentChange) => currentChange + votecrement);
    api.updateVotesByArticleId(commentId, votecrement).catch((error) => {
      setVoteError(error);
      setCommentVotes((currentVotes) => currentVotes - votecrement);
    });
  };

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

  if (voteError) {
    return (
      <div className="comment">
        <p>There was a problem confirming your vote.  Please try again later.</p>
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
      <p className="comment-text">{body}</p>
      <span className="Span-comment-votes">
      <IconButton
          aria-label="like"
          onClick={() => handleVotes(1)}
          disabled={author === user.username || votesChange === 1}
        >
          {!voteError && votesChange === 1 ? (
            <ThumbUpSharpIcon fontSize="medium" color="primary" />
          ) : (
            <ThumbUpOutlinedIcon fontSize="medium" color="primary" />
          )}
        </IconButton>
        <p className="comment-bar-text">{commentVotes}</p>
        <IconButton
          aria-label="dislike"
          onClick={() => handleVotes(-1)}
          disabled={author === user.username || votesChange === -1}
        >
          {!voteError && votesChange === -1 ? (
            <ThumbDownAltSharpIcon fontSize="medium" color="primary" />
          ) : (
            <ThumbDownAltOutlinedIcon fontSize="medium" color="primary" />
          )}
        </IconButton>
        
        <Button
          color="error"
          style={{ paddingBottom: 10, marginLeft: 20 }}
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
