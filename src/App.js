import "./App.css";
import "./Reset.css";
import InputField from "./components/InputField";
import Filters from "./components/Filters";
import ListItem from "./components/ListItem";
import React from "react";

function App() {
  let [value, setValue] = React.useState([
    { id: 0, title: "Drink a coffee", done: true },
    { id: 1, title: "Drink a tea", done: false },
    { id: 2, title: "Drink a milk", done: false },
    { id: 3, title: "Drink a water", done: false },
  ]);
  let [currentItems, setCurrentItems] = React.useState(value);

  const chooseFilter = (filter) => {
    if (filter === "all") {
      setCurrentItems(value);
      return;
    } else if (filter === "active") {
      let sortArr = [...value].filter((el) => el.done === false);
      setCurrentItems(sortArr);
    } else if (filter === "completed") {
      let sortArr = [...value].filter((el) => el.done === true);
      setCurrentItems(sortArr);
    }
  };

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        title: userInput,
        done: false,
      };
      setValue([...value, newItem]);
      setCurrentItems([...value, newItem]);
    }
  };

  const removeTask = (id) => {
    setCurrentItems([...currentItems.filter((value) => value.id !== id)]);
    setValue([...value.filter((value) => value.id !== id)]);
  };

  const toogleTask = (id) => {
    setCurrentItems([
      ...currentItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : { ...item }
      ),
    ]);
    setValue([
      ...value.map((item) =>
        item.id === id ? { ...item, done: !item.done } : { ...item }
      ),
    ]);
  };
  const toogleAllTask = () => {
    setCurrentItems([
      ...currentItems.map((item) =>
        item.done === false ? { ...item, done: true } : { ...item }
      ),
    ]);
    setValue([
      ...value.map((item) =>
        item.done === false ? { ...item, done: true } : { ...item }
      ),
    ]);
  };
  const clearCompleted = () => {
    setCurrentItems([...currentItems.filter((value) => value.done !== true)]);
    setValue([...value.filter((value) => value.done !== true)]);
  } 

  return (
    <div className="App">
      <header className="header">
        <h1>Todos</h1>
      </header>
      <main className="main">
        <InputField addTask={addTask} toogleAllTask={toogleAllTask} />

        <ListItem
          valueTasks={currentItems}
          toogleTask={toogleTask}
          removeTask={removeTask}
        />
        <Filters chooseFilter={chooseFilter} 
        currentItems={currentItems} 
        clearCompleted = {clearCompleted} />
      </main>
    </div>
  );
}

export default App;
