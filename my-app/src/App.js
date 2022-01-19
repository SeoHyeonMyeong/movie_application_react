import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  
  useEffect(() => {
    console.log("i run only once.");
  }, []);
  
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"First Button"} onClick={onClick}/>
    </div>
  );
}

export default App;
