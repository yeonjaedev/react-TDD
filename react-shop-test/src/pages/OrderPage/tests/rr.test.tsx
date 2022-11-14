import userEvent from "@testing-library/user-event";
import {render, screen} from "../../../test.utils";
import OrderPage from "../OrderPage";

describe("total price of goods and options", () => {
    test("total price starts with 0 and Updating total price when adding one product", async () => {
        render(<OrderPage />);

        const total = screen.getByText("All Total Price:", {exact: false});
        expect(total).toHaveTextContent("0");

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });
        userEvent.clear(americaInput);
        userEvent.type(americaInput, "1");

        expect(total).toHaveTextContent("1000");
    });

    test("Updating total price when adding one option", async () => {
        render(<OrderPage />);
        const total = screen.getByText("All Total Price:", {exact: false});

        const insuranceCheckbox = await screen.findByRole("checkbox", {
            name: "Insurance",
        });
        userEvent.click(insuranceCheckbox);
        expect(total).toHaveTextContent("500");
    });

    test("Updating total price when removing option and product", async () => {
        render(<OrderPage />);
        const total = screen.getByText("All Total Price:", {exact: false});

        const insuranceCheckbox = await screen.findByRole("checkbox", {
            name: "Insurance",
        });
        userEvent.click(insuranceCheckbox);

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });
        userEvent.clear(americaInput);
        userEvent.type(americaInput, "3");

        userEvent.clear(americaInput);
        userEvent.type(americaInput, "1");

        expect(total).toHaveTextContent("1500");
    });
});
