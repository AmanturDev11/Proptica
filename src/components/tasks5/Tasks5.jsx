import { useState } from "react";
import scss from "./Tasks5.module.scss";

const Tasks5 = () => {
	const [condition1, setCondition1] = useState(false);
	const [condition2, setCondition2] = useState(false);
	const [condition3, setCondition3] = useState(false);
	const [condition4, setCondition4] = useState(false);
	const [condition5, setCondition5] = useState(false);
	return (
		<div className={scss.Tasks5}>
			<div className="container">
				<div className={scss.content}>
					<button
						onClick={() => {
							setCondition1(true);
							setCondition2(false);
							setCondition3(false);
							setCondition4(false);
							setCondition5(false);
						}}>
						Item1
					</button>
					<button
						onClick={() => {
							setCondition2(true);
							setCondition1(false);
							setCondition3(false);
							setCondition4(false);
							setCondition5(false);
						}}>
						Item2
					</button>
					<button
						onClick={() => {
							setCondition3(true);
							setCondition1(false);
							setCondition2(false);
							setCondition4(false);
							setCondition5(false);
						}}>
						Item3
					</button>
					<button
						onClick={() => {
							setCondition4(true);
							setCondition1(false);
							setCondition2(false);
							setCondition3(false);
							setCondition5(false);
						}}>
						Item4
					</button>
					<button
						onClick={() => {
							setCondition5(true);
							setCondition1(false);
							setCondition2(false);
							setCondition3(false);
							setCondition4(false);
						}}>
						Item5
					</button>
					<div className={scss.textCard}>
						<div className={scss.cardtitle}>
							{condition1 && <p>Item1</p>}
							{condition2 && <p>Item2</p>}
							{condition3 && <p>Item3</p>}
							{condition4 && <p>Item4</p>}
							{condition5 && <p>Item5</p>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tasks5;
