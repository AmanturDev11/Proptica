import { useState } from "react";
import scss from "./Caunter.module.scss";

const Caunter = () => {
	const [caunter, setCaunter] = useState(0);

	const pilus = () => {
		setCaunter(caunter + 1);
	};

	const minusCaunter = () => {
		setCaunter(caunter - 1);
	};

	return (
		<div className={scss.Caunter}>
			<div className="container">
				<div className={scss.content}>
					<button onClick={pilus}>Increment</button>
					<h4>{caunter}</h4>
					<button onClick={minusCaunter}>Decrement</button>
				</div>
			</div>
		</div>
	);
};

export default Caunter;
