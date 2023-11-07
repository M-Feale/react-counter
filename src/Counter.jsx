import { useState } from "react";

import "./App.css";

const Counter = () => {
	const [count, setCount] = useState(0);

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
            <p>The count is {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={restart}>Restart</button>
            <button onClick={switchSigns}>Switch Signs</button>
		</div>
	);
};

export default Counter;
