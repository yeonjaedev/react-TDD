import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Type from "../Type";

test("여행 상품의 개수와 옵션에 따라 가격 계산해주기", async () => {
    render(<Type orderType="products" />);

    // 총 가격 text가 처음에 0으로 시작하는지 확인
    const totalPriceText = screen.getByText("총 가격", {exact: false});
    expect(totalPriceText).toHaveTextContent("0");

    // america 여행상품 선택 시 가격 1000원 되는지 확인
    const americaInput = await screen.findByRole("spinbutton", {
        // 서버에서 여행정보 받은 후에 test할 수 있기 때문에 getByRole 대신 findByRole 사용
        name: "America",
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
    expect(totalPriceText).toHaveTextContent("1000");
});
