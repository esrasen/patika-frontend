import React from 'react';
import "./receipt.css";

const Receipt = ({ products, totalMoney }) => {
    return (
        <div className="receipt">
            <h2>Your Receipt</h2>
            <div className="receipt-items">
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name}: ${product.price}
                        </li>
                    ))}
                </ul>
                <hr/>
                <p>Total : ${10000000-totalMoney}</p>
            </div>
        </div>
    );
};

export default Receipt;
