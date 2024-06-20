import React, { useEffect, useState } from 'react';
import { getOrder } from '../service/api';
import OrderList from '../components/OrderList';

const MyOrder = () => {
    const [data, setData] = useState([]);

    const fetchOrder = async () => {
        const token = localStorage.getItem('food_token');
        try {
            const res = await getOrder(token);
            console.log(res);
            if (res.data.data) {
                console.log(res.data.data);
                setData(res.data.data);
            }
        } catch (error) {
            console.log('Error fetching orders:', error.message);
        }
    };

    useEffect(() => {
        fetchOrder();
    }, []);

    return (
        <div className='mb-2'>
            {data.map((order) => (
                <div key={order.id} className='mb-2'>
                    <OrderList items={order.items} order={order}/>
                </div>
            ))}
        </div>
    );
};

export default MyOrder;
