import Type from "./Type";
import {useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {orderState, totalPriceSelector, totalPriceState} from "../../state/state";
import {useEffect} from "react";
const OrderPage = (props: any) => {
    const total = useRecoilValue(totalPriceSelector);
    const setOrder = useSetRecoilState(orderState);
    useEffect(() => {
        reset();
    }, []);

    const reset = () => {
        setOrder({products: new Map(), options: new Map()});
    };
    return (
        <div style={{padding: 20}}>
            <h1>Travel Products</h1>
            <div>
                <Type orderType="products" />
            </div>
            <div style={{display: "flex", marginTop: 20}}>
                <div style={{width: "50%"}}>
                    <Type orderType="options" />
                </div>
                <div>
                    <h1>All Total Price: {total.totalPrice}</h1>
                    <button onClick={() => props.setStep(1)}>주문</button>
                </div>
            </div>
        </div>
    );
};
export default OrderPage;
