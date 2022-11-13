import {useState} from "react";
import {useRecoilValue} from "recoil";
import {totalPriceSelector} from "../../state/state";

const SummaryPage = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const total = useRecoilValue(totalPriceSelector);
    return (
        <div>
            <h1>주문확인</h1>
            <h2>{`Products:`}</h2>
            <h2>{`Options:`}</h2>
            <h2>총가격:{total.totalPrice}</h2>
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
            <button disabled={!checked} type="submit">
                주문 확인
            </button>
        </div>
    );
};
export default SummaryPage;
