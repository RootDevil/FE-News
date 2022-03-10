import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const Sort = () => {
  const [sort, setSort] = useState("");

  return (
    <div className="sort">
      <FormControl sx={{ minWidth: 100 }} size="small">
        <InputLabel style={{ fontFamily: "newsreader" }}>Sort by</InputLabel>
        <Select
          style={{ fontFamily: "newsreader" }}
          variant="filled"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          label="Sort by"
        >
          <MenuItem style={{ fontFamily: "newsreader" }} value={""}>
            <em>None</em>
          </MenuItem>
          <MenuItem style={{ fontFamily: "newsreader" }} value={"created_at"}>
            Date Published
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
