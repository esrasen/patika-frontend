import {useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Products from "./components/Products/products.jsx";
import Receipt from "./components/Receipt/receipt.jsx";
import ListItem from "./components/Receipt/ListItem.jsx";

const App = () => {
    const [totalMoney, setTotalMoney] = useState(10000000);
    const [quantities, setQuantities] = useState({});

    const handleBuy = (productId, price) => {
        setTotalMoney(totalMoney - price);
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };

    const handleSell = (productId, price) => {
        if (quantities[productId] > 0) {
            setTotalMoney(totalMoney + price);
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] - 1
            }));
        }
    };
    
    return (
        <div>
            <Header totalMoney={totalMoney} />
            <Products handleBuy={handleBuy} handleSell={handleSell} quantities={quantities}/>
            <Receipt products={[]} totalMoney={totalMoney} />
        </div>
    );
};

export default App;