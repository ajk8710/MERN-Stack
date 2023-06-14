import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { removeItem, updateItem } from "../../State/CartState/CartActions";

let OrderItemComponent = (props)=>{
    let item = props.item;

    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.rating}</td>
            <td>{item.qty}</td>
            <td>{item.price*item.qty}</td>
        </tr>
    )
}

export default OrderItemComponent;
