import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Filters({
  chooseFilter,
  currentItems,
  clearCompleted,
}) {
  let [btn] = React.useState([
    { key: "all", name: "All" },
    { key: "active", name: "Active" },
    { key: "completed", name: "Completed" },
  ]);
  return (
    <div className="filters">
      <div className="info-box">Item left: {currentItems.length} </div>
      <div className="filters-box">
        <Stack spacing={2} direction="row">
          <ButtonGroup aria-label="outlined primary button group">
            {btn.map((item) => (
              <Button
                key={item.key}
                name="all"
                onClick={() => chooseFilter(item.key)}
                variant="outlined"
                color="success"
              >
                {item.name}
              </Button>
            ))}
          </ButtonGroup>
        </Stack>
      </div>

      <div className="clear-box">
        <Button
          variant="outlined"
          color="success"
          disabled={
            currentItems.find((item) => item.done === true) ? false : true
          }
          onClick={() => clearCompleted()}
        >
          Clear completed
        </Button>
      </div>
    </div>
  );
}
