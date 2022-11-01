import {render, screen} from "@testing-library/react";
import Type from "../Type";

test("display product images form server", async () => {
    render(<Type orderType="Products" />);

    const productImages = (await screen.findAllByRole("img", {
        name: /product$/i, // product로 끝나는 대소문자 구분없는 문자열
    })) as HTMLImageElement[];
    expect(productImages).toHaveLength(2);

    const altText = productImages.map(element => element.alt);
    expect(altText).toEqual(["America Product", "England Product"]);
});
