import { useState } from "react";
import scss from "./TasksStart.module.scss";

const TasksStart = () => {
	const [start, setStart] = useState(false);
	return (
		<div className={scss.TasksStart}>
			<div className="container">
				<div className={scss.content}>
					<button onClick={() => setStart(!start)}>
						{start ? "Stop" : "Start"}
					</button>
					<button onClick={() => setStart(!start)}>{start} Start</button>
					{start ? <div className={scss.Radius}></div> : null}
				</div>
			</div>
		</div>
	);
};

export default TasksStart;
