/* eslint-disable react/prop-types */
import Caunter from "../caunter/Caunter";
import { Random } from "../random/Random";
import Tasks from "../tasks/Tasks";
import Tasks3 from "../tasks3/Tasks3";
import Tasks4 from "../tasks4/Tasks4";
import Tasks5 from "../tasks5/Tasks5";
import TasksLast from "../tasksLast/TasksLast";
import TasksStart from "../tasksStart/TasksStart";

const NewForum = ({ setCondition, condition }) => {
	return (
		<div>
			<div className="container">
				<Tasks />
				<Caunter />
				<Tasks3 setCondition={setCondition} condition={condition} />
				<Random />
				<Tasks4 />
				<Tasks5 />
				<TasksStart />
				<TasksLast />
			</div>
		</div>
	);
};

export default NewForum;
