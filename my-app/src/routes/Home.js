import { useState, useEffect } from "react";
import Button from "../components/Button";
import MovieApp from "../components/MovieApp";
import Todo from "../components/Todo";
import CoinTracker from "../components/CoinTracker";
import styles from "./Home.module.css";

function Home() {
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
        <Button text={showing ? "숨김" : "보이기"} onClick={onClickShow}/>
        <hr/>
        <Todo/>
        <hr/>
        <CoinTracker />
        <hr/>
        <MovieApp/>
        </div>
    );
}
export default Home;