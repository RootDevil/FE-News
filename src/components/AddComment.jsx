import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import * as api from "../utils/api";

const AddComment = ({
  articleId,
  setComments,
  setIsPosting,
  setCommentCount,
}) => {
  const [commentValue, setCommentValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  const handleChange = ({ target: { value } }) => {
    setCommentValue(value);
    setIsValid(value.length !== 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentValue.length !== 0) {
      const commentToAdd = {
        username: user.username,
        body: commentValue,
      };
      setIsPosting(true);
      setError(null);
      api
        .addCommentByArticleId(articleId, commentToAdd)
        .then((comment) => {
          setComments((currentComments) => [comment, ...currentComments]);
          setIsPosting(false);
          setCommentValue("");
          setCommentCount((currentCount) => currentCount + 1);
        })
        .catch((err) => {
          setIsPosting(false);
          setError(err);
        });
    } else {
      setIsValid(false);
    }
  };

  return (
    <section className="section-add-comment">
      <form onSubmit={handleSubmit}>
        <TextField
          multiline
          fullWidth
          variant="filled"
          label="Add a comment..."
          placeholder="What's on your mind?"
          maxRows={3}
          value={commentValue}
          onChange={handleChange}
          error={!isValid}
          helperText={!isValid ? "Comment cannot be empty" : null}
          onBlur={() => setIsValid(commentValue.length !== 0)}
        />
        <Button type="submit">Post</Button>
        {error ? (
          <p className="add-comment-error">
            Sorry that didn't work, please try again.
          </p>
        ) : null}
      </form>
    </section>
  );
};

export default AddComment;
