import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import StyledLink from "./StyledLink";

const ArticleCard = ({
  articleId,
  title,
  topic,
  author,
  votes,
  comment_count,
}) => {
  return (
    <div className="Article-card">
      <StyledLink to={`/articles/${articleId}`} color="black">
        <h2 className="Article-card-title">{title}</h2>
      </StyledLink>
      <span className="Card-widget">
        <ThumbsUpDownIcon className="icon" />
        <p className="widget-text">{votes}</p>
        <ModeCommentIcon className="icon" fontSize="inherit" />
        <p className="widget-text">{comment_count}</p>
        <p className="Article-card-subheader">
          <StyledLink to={`/topics/${topic}`} color="black">
            {topic}
          </StyledLink>{" "}
          | {author}
        </p>
      </span>
    </div>
  );
};

export default ArticleCard;
