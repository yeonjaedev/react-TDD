import {atom, selector} from "recoil";

export const orderState = atom({
    key: "orderState",
    default: {
        products: new Map(),
        options: new Map(),
    },
});

export const totalPriceState = selector({
    key: "totalPriceState", // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const order = get(orderState);
        console.log(orderState);
        const productsTotal = calculrator("products", order);
        const optionsTotal = calculrator("options", order);
        const total = productsTotal + optionsTotal;

        return {products: productsTotal, options: optionsTotal, total: total};
    },
});

const pricePerItem = {
    products: 1000,
    options: 500,
};
export type orderType = "products" | "options";
const calculrator = (orderType: orderType, orderCounts: any) => {
    let total = 0;
    orderCounts.forEach((element: any) => {
        total += element[orderType].value();
    });
    return total * pricePerItem[orderType];
};

// const setOrderState = selector({
//     key: 'setOrderState',
//     get: ({get}) => get(orderState),
//     set: ({set}, (orderType:any,itemName:string) =>{
//         const newOrderCounts = {...orderState}
//         const orderCountsMap = orderState[orderType]
//         orderCountsMap.set(itemName,parseInt(newOrderCounts))
//         set(
//             orderState,
//             {}
//           )
//     }

//   });
