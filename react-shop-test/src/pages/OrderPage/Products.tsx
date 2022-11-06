import {useRecoilState} from "recoil";
import {orderState, orderType} from "../../state/state";
import {useState} from "react";
type propsType = {
    name: string;
    imagePath: string;
};
const Products = ({name, imagePath}: propsType) => {
    const [order, setOrder] = useRecoilState(orderState);
    const [inputValue, setInputValue] = useState<string>("0");

    const changeProductNum = (value: string) => {
        setOrder({
            products: order.products.set(name, value), // New first name from the input
            options: order.options,
        });
        console.log(order);
    };
    return (
        <div style={{width: "25%", float: "left"}}>
            <p>{name}</p>
            <img style={{width: "75%"}} src={`http://localhost:4000/${imagePath}`} alt={`${name} Product`} />
            <form style={{marginTop: 10}}>
                <label style={{textAlign: "right"}}>{name}</label>
                <input style={{marginLeft: 10}} type="" onChange={e => changeProductNum(e.target.value)}></input>
            </form>
        </div>
    );
};
export default Products;
