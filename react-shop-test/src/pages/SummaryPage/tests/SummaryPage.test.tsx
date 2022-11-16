import SummaryPage from "../SummaryPage";
import {render, screen} from "../../../test.utils";
import userEvent from "@testing-library/user-event";
test("checkbox and button", () => {
    render(<SummaryPage />);
    const checkbox = screen.getByRole("checkbox", {
        name: "주문하려는 것을 확인하셨나요?",
    }) as HTMLInputElement;
    expect(checkbox.checked).toEqual(false);
    const confirmButton = screen.getByRole("button", {
        name: "주문 확인",
    }) as HTMLInputElement;
    expect(confirmButton.disabled).toBeTruthy();
});
// test("주문화면에서 입력한 내역이 주문확인 페이지에서 잘 나오는지", async () => {
//     render(<SummaryPage />);

//     const product = screen.getByText("Products:", {exact: false});
//     expect(product).toHaveTextContent("1");
//     const option = screen.getByText("Options:", {exact: false});
//     expect(option).toHaveTextContent("1");
//     const price = screen.getByText("총 가격:", {exact: false});
//     expect(price).toHaveTextContent("1500");
// });
