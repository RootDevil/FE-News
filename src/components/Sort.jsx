import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { useState } from "react";
import * as api from "../utils/api";

const Sort = ({ sort, setSort, order, setOrder }) => {
  const handleChange = (query, { target: { value } }) => {
    query === "sort" ? setSort(value) : setOrder(value);
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
          onChange={(e) => handleChange("sort", e)}
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
      <FormControl sx={{ minWidth: 100 }} size="small">
        <InputLabel style={{ fontFamily: "newsreader" }}>Order by</InputLabel>
        <Select
          defaultValue="desc"
          style={{ fontFamily: "newsreader", maxHeight: 35 }}
          variant="filled"
          value={order}
          onChange={(e) => handleChange("order", e)}
          placeholder="Order by"
        >
          <MenuItem style={{ fontFamily: "newsreader" }} value={"desc"}>
            Descending
          </MenuItem>
          <MenuItem style={{ fontFamily: "newsreader" }} value={"asc"}>
            Ascending
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
