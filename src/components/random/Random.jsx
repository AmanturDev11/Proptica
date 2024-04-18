import { useState } from "react";
import scss from "./Random.module.scss";

export const Random = () => {
	const [showHome, setShowHome] = useState(false);
	const [showAbout, setShowAbout] = useState(false);
	const [showContacts, setShowContacts] = useState(false);

	return (
		<div className={scss.Random}>
			<div className="container">
				<div className={scss.content}>
					<button
						onClick={() => {
							setShowHome(true);
							setShowAbout(false);
							setShowContacts(false);
						}}>
						Home
					</button>
					<button
						onClick={() => {
							setShowHome(false);
							setShowAbout(true);
							setShowContacts(false);
						}}>
						About
					</button>
					<button
						onClick={() => {
							setShowHome(false);
							setShowAbout(false);
							setShowContacts(true);
						}}>
						Contacts
					</button>
					<div className={scss.contentText}>
						{showHome && <h2 className={scss.classP}>Home</h2>}
						{showAbout && <h2 className={scss.classP}>About</h2>}
						{showContacts && <h2 className={scss.classP}>Contacts</h2>}
					</div>
				</div>
			</div>
		</div>
	);
};
