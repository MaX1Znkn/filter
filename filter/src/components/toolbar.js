import React from "react";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
	return (
		<div className="Toolbar">
			{filters.map((o) => {
				return (
					<button
						className={o === selected ? "btn btnSelected" : "btn"}
						key={o}
						onClick={() => onSelectFilter(o)}
					>
						{o}
					</button>
				);
			})}
		</div>
	);
};

export default Toolbar;
