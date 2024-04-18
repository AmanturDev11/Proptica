/* eslint-disable react/prop-types */
import scss from "./Tasks3.module.scss";

const Tasks3 = ({ condition, setCondition }) => {
	return (
		<div className={scss.Tasks3}>
			<div className="container">
				<div className={scss.content}>
					<input
						className={scss.classInput}
						type="checkbox"
						onClick={() => setCondition(!condition)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Tasks3;
