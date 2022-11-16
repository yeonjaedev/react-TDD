import Type from "./Type";
import {useRecoilState, useRecoilValue, useRecoilValueLoadable} from "recoil";
import {totalPriceSelector, totalPriceState} from "../../state/state";
const OrderPage = (props:any) => {
    const total = useRecoilValue(totalPriceSelector);

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
                    <button onClick={()=>props.setStep(1)}>주문</button>
                </div>
            </div>
        </div>
    );
};
export default OrderPage;
