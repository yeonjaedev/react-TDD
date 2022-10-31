import SummaryPage from "../SummaryPage";
import {render, screen} from "@testing-library/react";
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
