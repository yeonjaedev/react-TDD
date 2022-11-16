import axios from "axios";
import {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import ErrorBanner from "../../components/ErrorBanner";
import {orderState} from "../../state/state";

const CompletePage = (props: any) => {
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState<boolean>(true);
    const orderData = useRecoilValue(orderState);
    const [error, setError] = useState(false);
    useEffect(() => {
        order();
    }, []);

    const order = async () => {
        try {
            let response = await axios.post(`http://localhost:4000/order`, orderData);
            if (response) {
                setResponse(response.data);
                setLoading(false);
            }
        } catch (error) {
            setError(true);
        }
    };
    return (
        <>
            {error && <ErrorBanner message="에러가 발생했습니다." />}
            {loading ? (
                <p>loading</p>
            ) : (
                <div>
                    <h2>주문이 완료됐습니다.</h2>
                    <button onClick={() => props.setStep(0)}>첫페이지로</button>
                </div>
            )}
        </>
    );
};
export default CompletePage;
