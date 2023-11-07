import { useState } from "react";

import "./App.css";

const Counter = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	const decrement = () => {
		setCount((prev) => prev - 1);
	};

	const restart = () => {
		setCount(0);
	};

	const switchSigns = () => {
		setCount((prev) => prev * -1);
	};

	return (
		<div className="card">
			<h1>Simple Counter</h1>
			<h2>Goal: Learn how to test in React with Jest</h2>
            <h3>The count is: </h3>
			<p data-testid="count">{count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={restart}>Restart</button>
			<button onClick={switchSigns}>Switch Signs</button>
		</div>
	);
};

export default Counter;
