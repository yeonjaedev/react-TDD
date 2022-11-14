import {render, screen} from "../../../test.utils";
import userEvent from "@testing-library/user-event";
import {RecoilRoot} from "recoil";
import Type from "../Type";
import OrderPage from "../OrderPage";
// test("총 가격은 0으로 시작하고 하나의 상품 추가 시 총 가격 업데이트 됨", async () => {
//     render(<OrderPage />);
//     const totalPrice = screen.getByText("All Total Price : ", {exact: false});
//     expect(totalPrice).toHaveTextContent("0");

//     const AmericaInput = await screen.findByRole("spinbutton", {
//         name: "America",
//     });
//     userEvent.clear(AmericaInput);
//     userEvent.type(AmericaInput, "1");
//     expect(totalPrice).toHaveTextContent("1000");
// });
// test("하나의 옵션 추가 시 총 가격 업데이트 됨", async () => {
//     render(<OrderPage />);
//     const totalPrice = screen.getByText("All Total Price : ", {exact: false});
//     expect(totalPrice).toHaveTextContent("0");
//     const DinnerInput = await screen.findByRole("checkbox", {
//         name: "Dinner",
//     });
//     userEvent.clear(DinnerInput);
//     userEvent.click(DinnerInput);
//     expect(totalPrice).toHaveTextContent("500");
// });
// test("상품과 옵션 삭제 시 총 가격 계산하기", async () => {
//     render(<OrderPage />);
//     const totalPrice = screen.getByText("All Total Price : ", {exact: false});
//     expect(totalPrice).toHaveTextContent("0");
//     const InsuranceInput = await screen.findByRole("checkbox", {
//         name: "Insurance",
//     });
//     userEvent.click(InsuranceInput);
//     expect(totalPrice).toHaveTextContent("500");

//     const AmericaInput = await screen.findByRole("spinbutton", {
//         name: "America",
//     });
//     userEvent.clear(AmericaInput);
//     userEvent.type(AmericaInput, "1");
//     expect(totalPrice).toHaveTextContent("1500");

//     // userEvent.clear(AmericaInput);
//     // userEvent.type(AmericaInput, "1");
//     // expect(totalPrice).toHaveTextContent("1500");
// });

// test("여행 상품의 개수에 따라 가격 계산해주기", async () => {
//     render(<Type orderType="products" />);

//     // 총 가격 text가 처음에 0으로 시작하는지 확인
//     const totalPriceText = screen.getByText("총 가격", {exact: false});
//     expect(totalPriceText).toHaveTextContent("0");

//     // america 여행상품 선택 시 가격 1000원 되는지 확인
//     const americaInput = await screen.findByRole("spinbutton", {
//         // 서버에서 여행정보 받은 후에 test할 수 있기 때문에 getByRole 대신 findByRole 사용
//         name: "America",
//     });
//     userEvent.clear(americaInput);
//     userEvent.type(americaInput, "1");
//     expect(totalPriceText).toHaveTextContent("1000");
// });

test("옵션 선택에 따라 가격 계산해주기", async () => {
    render(<Type orderType="options" />);

    const optionsTotal = screen.getByText("총 가격", {exact: false});
    expect(optionsTotal).toHaveTextContent("0");

    const insuranceInput = await screen.findByRole("checkbox", {
        name: "Insurance",
    });
    userEvent.clear(insuranceInput);
    userEvent.click(insuranceInput);
    expect(optionsTotal).toHaveTextContent("500");

    const DinnerInput = await screen.findByRole("checkbox", {
        name: "Dinner",
    });
    userEvent.click(DinnerInput);
    expect(optionsTotal).toHaveTextContent("1000");

    userEvent.click(DinnerInput);
    expect(optionsTotal).toHaveTextContent("500");
});
