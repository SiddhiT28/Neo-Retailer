import React from 'react';
import "./order.css";
import { OrderTable } from './OrderTable';

export const Orders = () => {
    return (
        <div>
            <h1>Orders</h1>

            <div>
                <OrderTable />
            </div>
        </div>
    )
}
