import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("주문하기 버튼 클릭", async () => {
    render(<App />);
    const americaInput = await screen.findByRole("spinbutton", {
        name: "America",
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "2");

    const englandInput = await screen.findByRole("spinbutton", {
        name: "England",
    });
    userEvent.clear(englandInput);
    userEvent.type(englandInput, "1");

    const insuranceCheckbox = await screen.findByRole("checkbox", {
        name: "Insurance",
    });
    userEvent.click(insuranceCheckbox);

    const orderButton = screen.getByRole("button", {
        name: "주문",
    });
    userEvent.click(orderButton);

    // 주문확인 페이지 테스트
    const summaryHeading = screen.getByRole("heading", {
        name: "주문확인",
    });
    expect(summaryHeading).toBeInTheDocument();

    const productHeading = screen.getByRole("heading", {
        name: "여행 상품: 3000",
    });
    expect(productHeading).toBeInTheDocument();

    const optionsHeading = screen.getByRole("heading", {
        name: "옵션: 500",
    });
    expect(optionsHeading).toBeInTheDocument();

    expect(screen.getByText("2 America")).toBeInTheDocument();
    expect(screen.getByText("1 England")).toBeInTheDocument();
    expect(screen.getByText("1 Insurance")).toBeInTheDocument();

    const confirmCheckbox = screen.getByRole("checkbox", {
        name: "주문하려는 것을 확인하셨나요?",
    });
    userEvent.click(confirmCheckbox);
    const btn = screen.getByRole("button", {
        name: "주문 확인",
    });
    userEvent.click(btn);
});
