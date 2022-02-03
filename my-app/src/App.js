import Button from "./Button";
import styles from "./App.module.css";
import Todo from "./Todo";
import CoinTracker from "./CoinTracker";
import Movie from "./Movie";
import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("Hello 컴포넌트 삭제")
  }
  function hiFn() {
    console.log("Hello 컴포넌트 생성");
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState("");
  const onClickShow = () => setShowing((prev) => !prev);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // 초기에 한번만 실행
  useEffect(() => {
    console.log("API 호출");
  }, []);

  // 키워드 변경시 실행
  useEffect(() =>{
    console.log("검색: ", keyword);
  }, [keyword]);

  // 카운터 변경시 실행
  useEffect(() => {
    console.log("숫자 변경: ", counter);
  }, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="입력..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"First Button"} onClick={onClick}/>
      <hr/>
      {showing ? <Hello /> : null}
      <Button text={showing ? "숨김" : "보이기"} onClick={onClickShow}/>
      <hr/>
      <Todo/>
      <hr/>
      <CoinTracker />
      <hr/>
      <Movie/>
    </div>
  );
}

export default App;
