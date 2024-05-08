import React from 'react';
import "./product.css";

const Products = ({ handleBuy, handleSell }) => {

    const products = [
        {
            id: 1,
            image: "https://neal.fun/spend/images/boeing-747.jpg",
            name: "Private Jet",
            price: 5000000
        },
        {
            id: 2,
            image: "https://neal.fun/spend/images/drone.jpg",
            name: "Sketch",
            price: 350
        },
        {
            id: 3,
            image: "https://neal.fun/spend/images/video-game.jpg",
            name: "Drone",
            price: 350
        },
        {
            id: 4,
            image: "https://neal.fun/spend/images/boeing-747.jpg",
            name: "Private Jet",
            price: 5000000
        },
        {
            id: 5,
            image: "https://neal.fun/spend/images/drone.jpg",
            name: "Sketch",
            price: 350
        },
        {
            id: 6,
            image: "https://neal.fun/spend/images/video-game.jpg",
            name: "Drone",
            price: 350
        }
    ];

    return (
        <div>
            <div className="cards">
                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt={product.name}/>
                        <h2>{product.name}</h2>
                        <p>
                            <strong>${product.price}</strong>
                        </p>
                        <button onClick={() => handleSell(product.price)}>Sell</button>
                        <input type="number" placeholder="0"/>
                        <button onClick={() => handleBuy(product.price)}>Buy</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
