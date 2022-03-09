import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";

const CommentCard = ({ author, body, createdAt, votes }) => {
  return (
    <div className="comment">
      <span className="Span-comment-header">
        <h4>{author}</h4>
        <p>{new Date(createdAt).toString().substring(4, 15)}</p>
      </span>
      <p>{body}</p>
      <span className="Span-comment-votes">
        <ThumbsUpDownIcon />
        <p className="widget-text">{votes}</p>
      </span>
    </div>
  );
};

export default CommentCard;
