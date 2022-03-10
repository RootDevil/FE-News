import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { useState } from "react";
import * as api from "../utils/api";

const Sort = ({ topic, setArticles, setIsLoading }) => {
  const [sort, setSort] = useState("");

  const handleChange = ({ target: { value } }) => {
    setSort(value);
    setIsLoading(true);
    api.fetchArticles(topic, value).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  };

  return (
    <div className="sort">
      <SortIcon fontSize="large" />

      <FormControl sx={{ minWidth: 100 }} size="small">
        <InputLabel style={{ fontFamily: "newsreader" }}>Sort by</InputLabel>
        <Select
          defaultValue=""
          style={{ fontFamily: "newsreader", maxHeight: 35 }}
          variant="filled"
          value={sort}
          onChange={handleChange}
          placeholder="Sort by"
        >
          <MenuItem style={{ fontFamily: "newsreader" }} value={""}>
            <em>None</em>
          </MenuItem>
          <MenuItem style={{ fontFamily: "newsreader" }} value={"created_at"}>
            Date Published
          </MenuItem>
          <MenuItem
            style={{ fontFamily: "newsreader" }}
            value={"comment_count"}
          >
            Comments
          </MenuItem>
          <MenuItem style={{ fontFamily: "newsreader" }} value={"votes"}>
            Votes
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
