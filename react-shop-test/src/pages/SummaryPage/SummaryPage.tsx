import {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import {orderState, totalPriceSelector} from "../../state/state";

const SummaryPage = (props: any) => {
    const [checked, setChecked] = useState<boolean>(false);
    const total = useRecoilValue(totalPriceSelector);
    const order = useRecoilValue(orderState);
    const [productArr, setProductArr] = useState<any[]>([]);
    const [optionArr, setOptionArr] = useState<any[]>([]);

    const iterMap = (arr: any, type: string) => {
        let tmp: any[] = [];
        arr.forEach((value: any, key: any) => {
            tmp.push(value + " " + key);
        });
        if (type === "product") {
            setProductArr(tmp);
        } else {
            setOptionArr(tmp);
        }
    };
    useEffect(() => {
        iterMap(order.products, "product");
        iterMap(order.options, "option");
    }, []);

    return (
        <div>
            <h1>주문확인</h1>
            <h2>{`여행 상품: ${total.productsPrice}`}</h2>
            {productArr && productArr.map((t: string) => <p key={t}>{t}</p>)}

            <h2>{`옵션: ${total.optionsPrice}`}</h2>
            {optionArr && optionArr.map((t: string) => <p key={t}>{t}</p>)}
            <h2>총 가격:{total.totalPrice}</h2>
            <form>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={e => {
                        setChecked(e.target.checked);
                    }}
                    id="confirm-checkbox"
                ></input>
                <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
            </form>
            <br />
            <button disabled={!checked} onClick={() => props.setStep(2)} type="submit">
                주문 확인
            </button>
        </div>
    );
};
export default SummaryPage;
