import axios from "axios";
import {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import ErrorBanner from "../../components/ErrorBanner";
import {pricePerItem, totalPriceSelector} from "../../state/state";
import Options from "./Options";
import Products from "./Products";
type propsType = {
    orderType: string;
};
const Type = ({orderType}: propsType) => {
    const [items, setItems] = useState<any[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [totalTypePrice, setTotalTypePrice] = useState<string>("0");
    const total = useRecoilValue(totalPriceSelector);
    useEffect(() => {
        loadItems();
    }, [orderType]);
    const loadItems = async () => {
        try {
            let response = await axios.get(`http://localhost:4000/${orderType}`);
            if (response) {
                setItems(response.data);
            }
        } catch (error) {
            setError(true);
        }
    };
    const ItemComponents = orderType === "products" ? Products : Options;

    const optionItems = items.map(item => <ItemComponents key={item.name} name={item.name} imagePath={item.imagePath} />);
    if (error) {
        return <ErrorBanner message="에러가 발생했습니다." />;
    }
    return (
        <>
            <h1>{orderType}</h1>
            <h2>주문종류</h2>
            <p>하나의 가격 :{orderType === "products" ? "1000" : "500"}</p>
            <p>총 가격:{orderType === "products" ? total.productsPrice : total.optionsPrice}</p>
            <div style={orderType === "option" ? {display: "flex", flexDirection: "column"} : {display: "flex"}}>{optionItems}</div>
        </>
    );
};
export default Type;
