import React from 'react';

function ListItem({ products }) {
    return (
        <div>
            {products.map((item) => (
                <li key={item.id}>
                    {item.name}: {item.price} ₺
                </li>
            ))}
        </div>
    );
}

export default ListItem;
