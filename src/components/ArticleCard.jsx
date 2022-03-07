import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { Link } from "react-router-dom";

const ArticleCard = ({ title, topic, author, votes, comment_count }) => {
  return (
    <div className="Article-card">
      <h2>{title}</h2>
      <span className="Card-widget">
        <ThumbsUpDownIcon className="icon" />
        <p className="widget-text">{votes}</p>
        <ModeCommentIcon className="icon" fontSize="inherit" />
        <p className="widget-text">{comment_count}</p>
        <p className="Article-card-subheader">
          <Link color="" to={`/topics/${topic}`}><u>{topic}</u></Link> | {author}
        </p>
      </span>
    </div>
  );
};

export default ArticleCard;
