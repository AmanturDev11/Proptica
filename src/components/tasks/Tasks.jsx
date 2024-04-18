import { useState } from "react";
import scss from "./Tasks.module.scss";

const Tasks = () => {
	const [showClic, setShowClic] = useState(false);

	function handleAdd() {
		setShowClic(true);
	}

	function handle2Add() {
		setShowClic(false);
	}

	return (
		<div className={scss.Tasks}>
			<div className="container">
				<div className={scss.content}>
					{showClic ? (
						<button onClick={handle2Add}>CLOSE</button>
					) : (
						<button onClick={handleAdd}>OPEN</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tasks;
