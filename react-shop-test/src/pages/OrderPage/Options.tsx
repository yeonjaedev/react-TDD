import {useRecoilState} from "recoil";
import {orderState} from "../../state/state";

interface OptionInterface {
    name: string;
}
const Options = ({name}: OptionInterface) => {
    const [order, setOrder] = useRecoilState(orderState);
    const checkOption = (checked: boolean) => {
        setOrder({
            products: order.products,
            options: order.options.set(name, checked ? 1 : 0),
        });
    };
    return (
        <>
            <form>
                <input type="checkbox" id={`${name} option`} onChange={e => checkOption(e.target.checked)} />
                {""}
                <label htmlFor={`${name} option`}>{name}</label>
            </form>
        </>
    );
};
export default Options;
