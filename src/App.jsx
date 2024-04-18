import { useState } from "react";
import NewForum from "./components/newForum/NewForum";
import scss from "./App.module.scss";
function App() {
	const [condition, setCondition] = useState(false);

	return (
		<div
			className={
				condition ? `${scss.NooActive} ${scss.active}` : `${scss.NooActive}`
			}>
			<NewForum setCondition={setCondition} condition={condition} />
		</div>
	);
}

export default App;
