import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";
import * as api from "../utils/api";

const InteractionPanel = ({ articleId, votes }) => {
    const [articleVotes, setArticleVotes] = useState(votes);
    const [votesChange, setVotesChange] = useState(0);

    const handleVotes = (votecrement) => {
        setArticleVotes((currentVotes) => currentVotes + votecrement);
        setVotesChange((currentChange) => currentChange + votecrement);
        api.updateVotesByArticleId(articleId, votecrement);
    }

  return (
    <section>
      <span className="Span-interaction-panel">
        <IconButton aria-label="like" onClick={() => handleVotes(1)} disabled={votesChange === 1}>
          <ThumbUpOutlinedIcon fontSize="medium" />
        </IconButton>
        <h4>{articleVotes}</h4>
        <IconButton aria-label="dislike" onClick={() => handleVotes(-1)} disabled={votesChange === -1}>
          <ThumbDownAltOutlinedIcon fontSize="medium" />
        </IconButton>
      </span>
    </section>
  );
};

export default InteractionPanel;
