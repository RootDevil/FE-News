import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";

const InteractionPanel = ({ votes }) => {
    const [articleVotes, setArticleVotes] = useState(votes);

    const handleVotes = (votecrement) => {
        setArticleVotes((currentVotes) => currentVotes + votecrement);
    }

  return (
    <section>
      <span className="Span-interaction-panel">
        <IconButton aria-label="like" onClick={() => handleVotes(1)}>
          <ThumbUpOutlinedIcon fontSize="medium" />
        </IconButton>
        <h4>{articleVotes}</h4>
        <IconButton aria-label="dislike" onClick={() => handleVotes(-1)}>
          <ThumbDownAltOutlinedIcon fontSize="medium" />
        </IconButton>
      </span>
    </section>
  );
};

export default InteractionPanel;
