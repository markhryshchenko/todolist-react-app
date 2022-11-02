import * as React from "react";

import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ListItem from "@mui/material/ListItem";
import styles from "./Items.module.css";

export default function Items({ valueTasks, toogleTask, removeTask }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  if (checked === true) {
  }

  return (
    <div className={styles.tasks__list}>
      <div key={valueTasks.id} className={styles.row}>
        <Checkbox
          checked={valueTasks.done}
          onChange={handleChange}
          onClick={() => toogleTask(valueTasks.id)}
          color="success"
        />

        <ListItem>
          <div className={valueTasks.done ? "strike" : "strike-text"}>
            {valueTasks.title}
          </div>
        </ListItem>

        <Tooltip onClick={() => removeTask(valueTasks.id)} title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Divider />
    </div>
  );
}
