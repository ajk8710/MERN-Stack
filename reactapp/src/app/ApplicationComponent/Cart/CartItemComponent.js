import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { removeItem, updateItem} from "../../State/CartState/CartActions";

let CartItemComponent = (props)=>{
    let item = props.item;
    let readOnly = props.readOnly;
    let [qty, setQty] = useState(item.qty);

    let dispatchToRemove = useDispatch();
    let dispatchToUpdate = useDispatch();

    let removeItemFromCart = ( productid )=>{
        dispatchToRemove(removeItem(productid))
    }

    let updateItemFromCart = ( productid, qty )=>{
        if (qty <= 0) {
            alert("Please enter positive quantity");
        }
        else {
            dispatchToUpdate(updateItem(productid, qty))
        }
    }

    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.rating}</td>
            <td>{!readOnly ? 
                    <input type={"number"} value={qty} 
                    onChange={(evt)=>{setQty(evt.target.value)}} 
                    maxLength={"2"}/>  // max 99
                : 
                    item.qty}
            </td>
            <td>{item.price*item.qty}</td>
                {readOnly ?"" :
                        <td>
                            <button onClick={()=>removeItemFromCart(item._id)}>
                                Remove
                            </button>
                        </td>
                }
                {readOnly ?"" :
                    <td>
                        <button onClick={() => updateItemFromCart(item._id, qty)}>
                            Update
                        </button>
                    </td>
                }
        </tr>
    )
}

export default CartItemComponent;
