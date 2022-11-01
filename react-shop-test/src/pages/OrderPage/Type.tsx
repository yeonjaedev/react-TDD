import axios from "axios";
import {useEffect, useState} from "react";
import ErrorBanner from "../../components/ErrorBanner";
import Options from "./Options";
import Products from "./Products";

const Type = ({orderType}: any) => {
    const [items, setItems] = useState<any[]>([]);
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        loadItems();
    }, [orderType]);
    const loadItems = async () => {
        try {
            let response = await axios.get(`http://localhost:4000/${orderType}`);
            setItems(response.data);
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
            <h1>dfdfdfdfdfdfdf</h1>
            {optionItems}
        </>
    );
};
export default Type;
