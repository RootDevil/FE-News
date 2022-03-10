import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const AddComment = ({ setComments }) => {
  const [commentValue, setCommentValue] = useState("");
  const [error, setError] = useState(false);
  const { user } = useContext(UserContext);

  const handleChange = ({ target: { value } }) => {
    setCommentValue(value);
    setError(commentValue.length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentValue.length !== 0) {
      const commentToAdd = {
        author: user.username,
        body: commentValue,
        votes: 0,
        created_at: Date.now(),
      };
      setComments((currentComments) => [commentToAdd, ...currentComments]);
      setCommentValue("");
    } else {
      setError(true);
    }
  };

  return (
    <section className="section-add-comment">
      <form onSubmit={handleSubmit}>
        <TextField
          multiline
          fullWidth
          maxRows={3}
          error={error}
          helperText={error ? "Comment cannot be empty" : null}
          variant="filled"
          label="Add a comment..."
          placeholder="What's on your mind?"
          value={commentValue}
          onChange={handleChange}
          onBlur={() => setError(commentValue.length === 0)}
        />
        <Button type="submit">Post</Button>
      </form>
    </section>
  );
};

export default AddComment;
