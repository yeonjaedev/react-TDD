import {render, screen} from "@testing-library/react";
import {rest} from "msw";
import {server} from "../../../mocks/server";
import Type from "../Type";

test("display product images form server", async () => {
    render(<Type orderType="products" />);

    const productImages = (await screen.findAllByRole("img", {
        name: /product$/i, // product로 끝나는 대소문자 구분없는 문자열
    })) as HTMLImageElement[];
    expect(productImages).toHaveLength(2);

    const altText = productImages.map(element => element.alt);
    expect(altText).toEqual(["America Product", "England Product"]);
});

test("when fetching product datas, face an error", async () => {
    server.resetHandlers(
        rest.get("http://localhost:4000/products", (req, res, ctx) => {
            return res(ctx.status(500));
        })
    );

    render(<Type orderType="products" />);
    const errorBanner = await screen.findByTestId("error-banner");
    expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});
test("fetch option information from server", async () => {
    render(<Type orderType="options" />);
    const optionCheckboxes = await screen.findAllByRole("checkbox");
    expect(optionCheckboxes).toHaveLength(2);
});
