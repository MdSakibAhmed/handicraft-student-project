import React, { useState } from 'react';
import Booking from '../../Products/Booking/Booking';
import ManageProducts from '../../Dashboard/ManageProducts/ManageProducts';
import ProductBanner from '../../Products/ProductBanner/ProductBanner';
import ProductOrder from '../../Dashboard/ProductOrder/ProductOrder';

const Users = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <ProductBanner date={date} setDate={setDate} />
            {/* <Booking date={date} /> */}
            {/* <ProductOrder></ProductOrder>
            <ManageProducts></ManageProducts> */}
        </div>
    );
};

export default Users;