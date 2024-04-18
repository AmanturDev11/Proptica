import { useState } from "react";
import scss from "./Random.module.scss";

export const Random = () => {
	const [home, setHome] = useState(false);
	const [about, setAbout] = useState(false);
	const [contacts, setContacts] = useState(false);

	return (
		<div className={scss.Random}>
			<div className="container">
				<div className={scss.content}>
					<button
						onClick={() => {
							setHome(true);
							setAbout(false);
							setContacts(false);
						}}>
						Home
					</button>
					<button
						onClick={() => {
							setAbout(true);
							setHome(false);
							setContacts(false);
						}}>
						About
					</button>
					<button
						onClick={() => {
							setContacts(true);
							setHome(false);
							setAbout(false);
						}}>
						Contacts
					</button>
					<div className={scss.contentText}>
						{home && <h2 className={scss.classP}>Home</h2>}
						{about && <h2 className={scss.classP}>About</h2>}
						{contacts && <h2 className={scss.classP}>Contacts</h2>}
					</div>
				</div>
			</div>
		</div>
	);
};
