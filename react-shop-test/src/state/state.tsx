import {atom, selector} from "recoil";

export const orderState = atom({
    key: "orderState",
    default: {
        products: new Map(),
        options: new Map(),
    },
});
export const testAtom = atom({
    key: "testAtom",
    default: new Map(),
});
export const totalPriceState = atom({
    key: "totalPriceState",
    default: {products: 0, options: 0, total: 0},
});

export const totalPriceSelector = selector({
    key: "totalPriceSelector",
    get: ({get}) => {
        //let a = get(testAtom);
        let orders = get(orderState);
        let productsPrice = 0;
        let optionsPrice = 0;
        let totalPrice = 0;

        orders["products"].forEach((value: number, key: string) => {
            productsPrice += Number(value) * pricePerItem["products"];
        });
        orders["options"].forEach((value: number, key: string) => {
            optionsPrice += Number(value) * pricePerItem["options"];
        });
        totalPrice = productsPrice + optionsPrice;
        return {productsPrice: productsPrice, optionsPrice: optionsPrice, totalPrice: totalPrice};
    },
});
export const pricePerItem = {
    products: 1000,
    options: 500,
};
export type orderType = "products" | "options";
