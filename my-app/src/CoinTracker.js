import { useState, useEffect } from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [coin, setCoin] = useState(false);
    const [USD, setUSD] = useState(0);

    function onChangeCoin(event){
        let index = event.target.selectedIndex
        if (index !== undefined){
            setCoin(coins[event.target.selectedIndex]);
        }
    }

    function onChangeUSD(event){
        setUSD(event.target.value);
    }
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h1>코인 {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>로딩중...</strong> : null}
            <select onChange={(onChangeCoin)}>
                {coins.map((coin, index) => (
                    <option key={index}>
                        {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                    </option>
                ))}
            </select>
            <h2>당신의 USD는?</h2>
            <input type="text" onChange={onChangeUSD} value={USD} />
            <h3>살 수 있는 코인 {coin ? USD / coin.quotes.USD.price : null}</h3>
        </div>
    )
}

export default CoinTracker;