import * as React from "react";

import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";

export default function InputField({ addTask, toogleAllTask }) {
  let [input, setInput] = React.useState("");
  
  
  
  function handleSubmit (e){
    e.preventDefault();
    addTask(input);
    setInput("");
    
  }
  function handleEnter(e) {
    if (e.key === 'Enter'){
      handleSubmit(e)
    }
  }
  function handleChange(e) {
    setInput(e.currentTarget.value);
  }
  return (
    <div className="input-field">
    
      <form onSubmit={handleSubmit}>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="start"
          alignItems="center"
        >
          <KeyboardArrowDownIcon onClick={() => toogleAllTask()} />
          <TextField
            value={input}
            type="text"
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => handleEnter(e)}
            name="input"
            className="input-item"
            color="success"
            fullWidth
            placeholder="What needs to be done?"
            /* label="What needs to be done?" */
            id="fullWidth"
          />
          
        </Stack>
      </form>
    </div>
  );
}
