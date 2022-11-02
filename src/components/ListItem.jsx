import Items from "./Items";
import List from "@mui/material/List";

export default function ListItem({ valueTasks, toogleTask,removeTask }) {
  return (
    <div>
      <List>
        {valueTasks.map((task) => (
          <Items valueTasks={task} key={task.id} toogleTask={toogleTask} removeTask={removeTask} />
        ))}
      </List>
    </div>
  );
}
