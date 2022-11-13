import {useRecoilState, useRecoilValue} from "recoil";
import {orderState, orderType, testAtom} from "../../state/state";
import {useState} from "react";
type propsType = {
    name: string;
    imagePath: string;
};
const Products = ({name, imagePath}: propsType) => {
    const [order, setOrder] = useRecoilState(orderState);
    const [teAtom, setTestAtom] = useRecoilState(testAtom);

    const [inputValue, setInputValue] = useState<string>("0");
    const changeProductNum = (value: string) => {
        setOrder({
            products: order.products.set(name, value), // New first name from the input
            options: order.options,
        });
    };
    return (
        <div style={{width: "25%", float: "left"}}>
            <p>{name}</p>
            <img style={{width: "75%"}} src={`http://localhost:4000/${imagePath}`} alt={`${name} Product`} />
            <form style={{marginTop: 10}}>
                <label htmlFor={name} style={{textAlign: "right"}}>
                    {name}
                </label>
                <input id={name} style={{marginLeft: 10}} type="number" min="0" defaultValue={0} onChange={e => changeProductNum(e.target.value)}></input>
            </form>
        </div>
    );
};
export default Products;
