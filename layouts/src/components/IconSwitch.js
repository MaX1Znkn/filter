import React from "react";

const IconSwitch = ({ icon, onSwitch }) => {
	let view;

	if (icon === "view_list") {
		view = "view_module";
	} else {
		view = "view_list";
	}

	return (
		<div className="iconSwitch">
			<div onClick={onSwitch} className="material-icons icon">
				{view}
			</div>
		</div>
	);
};

export default IconSwitch;
