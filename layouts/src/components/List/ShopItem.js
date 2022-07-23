import React from "react";

const ShopItem = ({ item }) => {
	return (
		<div className="list">
			<div>
				<img className="listImg" alt="" src={item.img} />
			</div>
			<p className="listName">{item.name}</p>
			<p className="listColor">{item.color}</p>
			<p className="listPrice">${item.price}</p>
			<button className="listButton">ADD TO CART</button>
		</div>
	);
};

export default ShopItem;
