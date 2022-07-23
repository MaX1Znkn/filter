import React from "react";
import ShopCard from "./ShopCard";

const CardView = ({ cards }) => {
	return (
		<div className="cardContainer">
			{cards.map((card, i) => {
				return <ShopCard card={card} key={i} />;
			})}
		</div>
	);
};

export default CardView;
