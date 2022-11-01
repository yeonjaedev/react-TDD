import axios from "axios";
import {useEffect, useState} from "react";
import Products from "./Products";

const Type = ({orderType}: any) => {
    const [items, setItems] = useState<any[]>([]);
    useEffect(() => {
        loadItems();
    }, [orderType]);
    const loadItems = async () => {
        try {
            let response = await axios.get(`http://localhost:5000/${orderType}`);
            setItems(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const ItemComponents = Products;

    const optionItems = items.map(item => <ItemComponents key={item.name} name={item.name} imagePath={item.imagePath} />);
    return (
        <>
            <h1>dfdfdfdfdfdfdf</h1>
            {optionItems}
        </>
    );
};
export default Type;
