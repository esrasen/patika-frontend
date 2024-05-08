import {useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Products from "./components/Products/products.jsx";
import Receipt from "./components/Receipt/receipt.jsx";
import ListItem from "./components/Receipt/ListItem.jsx";

const App = () => {
    const [totalMoney, setTotalMoney] = useState(10000000);

    const handleBuy = (price) => {
        setTotalMoney(totalMoney - price);
    };

    const handleSell = (price) => {
        setTotalMoney(totalMoney + price);
    };

    return (
        <div>
            <Header totalMoney={totalMoney} />
            <Products handleBuy={handleBuy} handleSell={handleSell} />
            <Receipt products={[]} totalMoney={totalMoney} />
        </div>
    );
};

export default App;