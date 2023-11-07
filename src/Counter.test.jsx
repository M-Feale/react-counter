import { render } from "@testing-library/react";
import Counter from "./Counter";

// can also be the word "test" instead of "describe"
describe(Counter, () => {
	it("Counter displays correct initial count", () => {
		// getByTestId = for elements that are dynamically changing. We couldn't getByText because it always changed, it's a counter
		const { getByTestId } = render(<Counter initialCount={0} />);
		const countValue = Number(getByTestId("count").textContent); // will be a string
        expect(countValue).toEqual(0)
	});
});
