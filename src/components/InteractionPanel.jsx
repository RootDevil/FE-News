import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp";
import CommentIcon from '@mui/icons-material/Comment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, IconButton } from "@mui/material";
import { useContext, useState } from "react";
import * as api from "../utils/api";
import { UserContext } from "../contexts/UserContext";

const InteractionPanel = ({ articleId, votes, author, commentCount }) => {
  const [articleVotes, setArticleVotes] = useState(votes);
  const [votesChange, setVotesChange] = useState(0);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  const handleVotes = (votecrement) => {
    setArticleVotes((currentVotes) => currentVotes + votecrement);
    setVotesChange((currentChange) => currentChange + votecrement);
    api.updateVotesByArticleId(articleId, votecrement).catch((error) => {
      setError(error);
      setArticleVotes((currentVotes) => currentVotes - votecrement);
    });
  };

  return (
    <section>
      <span className="Span-interaction-panel">
        <IconButton
          aria-label="like"
          onClick={() => handleVotes(1)}
          disabled={author === user.username || votesChange === 1}
        >
          {!error && votesChange === 1 ? (
            <ThumbUpSharpIcon fontSize="medium" color="primary" />
          ) : (
            <ThumbUpOutlinedIcon fontSize="medium" color="primary" />
          )}
        </IconButton>
        <h4>{articleVotes}</h4>
        <IconButton
          aria-label="dislike"
          onClick={() => handleVotes(-1)}
          disabled={author === user.username || votesChange === -1}
        >
          {!error && votesChange === -1 ? (
            <ThumbDownAltSharpIcon fontSize="medium" color="primary" />
          ) : (
            <ThumbDownAltOutlinedIcon fontSize="medium" color="primary" />
          )}
        </IconButton>
        {error ? <p>That didn't work, please reload and try again.</p> : null}
        <Button variant="text" startIcon={<CommentIcon/>} endIcon={<KeyboardArrowDownIcon/>}>
          Comments ({commentCount})
        </Button>
      </span>
    </section>
  );
};

export default InteractionPanel;
