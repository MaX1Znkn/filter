import React from "react";

const ShopCard = ({ card }) => {
	return (
		<div className="card">
			<p className="cardName">{card.name}</p>
			<p className="cardColor">{card.color}</p>
			<div>
				<img className="cardImg" alt="" src={card.img} />
			</div>
			<div className="bottomInfo">
				<p className="cardPrice">${card.price}</p>
				<button className="cardButton">ADD TO CART</button>
			</div>
		</div>
	);
};

export default ShopCard;
