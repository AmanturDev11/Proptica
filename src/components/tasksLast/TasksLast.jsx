import { useState } from "react";
import scss from "./TasksLast.module.scss";

const TasksLast = () => {
	const [all, setAll] = useState(false);
	const [completed, setCompleted] = useState(false);
	const [uncompleted, setUncompleted] = useState(false);
	return (
		<div className={scss.TasksLast}>
			<div className="container">
				<div className={scss.content}>
					<button
						onClick={() => {
							setAll(true);
							setCompleted(false);
							setUncompleted(false);
						}}>
						All
					</button>
					<button
						onClick={() => {
							setCompleted(true);
							setAll(false);
							setUncompleted(false);
						}}>
						Completed
					</button>
					<button
						onClick={() => {
							setUncompleted(true);
							setAll(false);
							setCompleted(false);
						}}>
						Uncompleted
					</button>
					<div>
						{all && <p>Task 1 NOT COMPLETED</p>}
						{all && <p>Task 2 COMPLETED</p>}
						{all && <p>Task 3 NOT COMPLETED</p>}
						{all && <p>Task 4 COMPLETED</p>}
						{completed && <p>Task 2 COMPLETED</p>}
						{completed && <p>Task 4 COMPLETED</p>}
						{uncompleted && <p>Task 1 NOT COMPLETED</p>}
						{uncompleted && <p>Task 3 NOT COMPLETED</p>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TasksLast;
