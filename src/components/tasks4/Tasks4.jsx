import { useState } from "react";
import scss from "./Tasks4.module.scss";

const Tasks4 = () => {
	const [handle, setHandle] = useState(false);

	return (
		<div className={scss.Tasks4}>
			<div className="container">
				<div className={scss.content}>
					<button onClick={() => setHandle(!handle)}>
						{handle ? "Open" : "Close"}
					</button>
					{handle ? <h3>Upps!</h3> : null}
				</div>
			</div>
		</div>
	);
};

export default Tasks4;
