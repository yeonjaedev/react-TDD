import Type from "./Type";
import {useRecoilState} from "recoil";
import {totalPriceState} from "../../state/state";
const OrderPage = () => {
    return (
        <>
            <h1>Travel Products</h1>
            <div>
                <Type orderType="products" />
            </div>
            <div style={{display: "flex", marginTop: 20}}>
                <div style={{width: "50%"}}>
                    <Type orderType="options" />
                </div>
                <div>
                    {/* <h1>Total Price : {totalPrice}</h1> */}
                    <button>주문</button>
                </div>
            </div>
        </>
    );
};
export default OrderPage;
