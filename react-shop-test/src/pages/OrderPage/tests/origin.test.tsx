import {render, screen, waitFor} from "../../../test.utils";
import userEvent from "@testing-library/user-event";
import Type from "../Type";
import OrderPage from "../OrderPage";

test("update product's total when products change", async () => {
    render(<Type orderType="products" />);

    const productsTotal = screen.getByText("총 가격:", {exact: false});
    expect(productsTotal).toHaveTextContent("0");

    // 아메리카 여행 상품 한개 올리기
    const americaInput = await screen.findByRole("spinbutton", {
        name: "America",
    });
    // userEvent.type(americaInput, "3");

    // userEvent.type(americaInput, "2");
    // userEvent.clear(americaInput);
    userEvent.clear(americaInput);

    userEvent.type(americaInput, "1");

    console.log("use", productsTotal.textContent);
    expect(productsTotal).toHaveTextContent("1000");
});

test("update option's total when options change", async () => {
    render(<Type orderType="options" />);

    const optionsTotal = screen.getByText("총 가격:", {exact: false});
    expect(optionsTotal).toHaveTextContent("0");

    const insuranceCheckbox = await screen.findByRole("checkbox", {
        name: "Insurance",
    });
    userEvent.click(insuranceCheckbox);
    expect(optionsTotal).toHaveTextContent("500");

    const dinnerCheckbox = await screen.findByRole("checkbox", {
        name: "Dinner",
    });
    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("1000");

    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("500");
});
