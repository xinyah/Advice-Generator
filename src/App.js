import { useEffect, useState } from "react";
import "./App.css";
import lowerBanner from "./pattern-divider-desktop.svg";
import buttonImg from "./icon-dice.svg";

function App() {
	const [adviceNum, setAdviceNum] = useState(-1);
	const [advice, setAdvice] = useState("");

	useEffect(() => {
		getNewAdvice();
	});

	const getNewAdvice = () => {
		do {
			fetch("https://api.adviceslip.com/advice")
				.then((res) => res.json())
				.then((result) => {
					setAdviceNum(result.slip.id);
					setAdvice(result.slip.advice);
					console.log(result.slip);
				});
		} while (advice.length > 80);
	};

	return (
		<div class="center-flex">
			{adviceNum !== -1 && (
				<div class="flex-item">
					<p>Advice #{adviceNum}</p>
					<p>"{advice}"</p>
					<img class="first-image" src={lowerBanner} alt="deco" />
					<div class="second-image" onClick={getNewAdvice}>
						<img src={buttonImg} alt="dice" />
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
