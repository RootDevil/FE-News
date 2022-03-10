import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const AddComment = ({ setComments }) => {
  const [commentValue, setCommentValue] = useState("");
  const { user } = useContext(UserContext);

  const handleChange = ({ target: { value } }) => {
    setCommentValue(value);
  };

  const handleSubmit = () => {
      const commentToAdd = {
          author: user.username,
          body: commentValue,
          votes: 0,
          created_at: Date.now()
      }
    setComments((currentComments) => [commentToAdd, ...currentComments]);
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
          value={commentValue}
          onChange={handleChange}
        />
        <Button type="submit">Post</Button>
      </form>
    </section>
  );
};

export default AddComment;
