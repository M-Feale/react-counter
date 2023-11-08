import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

// can also be the word "test" instead of "describe"
describe(Counter, () => {
	it("Counter displays correct initial count", () => {
		// getByTestId = for elements that are dynamically changing. We couldn't getByText because it always changed, it's a counter
		const { getByTestId } = render(<Counter initialCount={0} />);
		const countValue = Number(getByTestId("count").textContent); // will be a string before we use the Number conversion on it
		expect(countValue).toEqual(0);
	});
	it("count should increment by 1 if the increment button is clicked", () => {
		// const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
		// const incrementBtn = getByRole("button", { name: "Increment" });
        // fireEvent.click(incrementBtn);
		// const countValue = Number(getByTestId("count").textContent); 
		// expect(countValue).toEqual(1);
        // To test countValue before and after, we would write this other version
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
		const incrementBtn = getByRole("button", { name: "Increment" });
        const countValue1 = Number(getByTestId("count").textContent); 
		expect(countValue1).toEqual(0);
        fireEvent.click(incrementBtn);
		const countValue2 = Number(getByTestId("count").textContent); 
		expect(countValue2).toEqual(1);
	});
    it("count should decrement by 1 if the decrement button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0} />)
        const decrementBtn = getByRole("button", {name: "Decrement"})
        // Version to write everything in one line instead of having a transition variable
        expect(Number(getByTestId("count").textContent)).toEqual(0)
        fireEvent.click(decrementBtn)
        expect(Number(getByTestId("count").textContent)).toEqual(-1)
    })

});
