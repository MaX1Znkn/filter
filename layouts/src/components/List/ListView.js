import React from "react";
import ShopItem from "./ShopItem";

const ListView = ({ items }) => {
	return (
		<div className="listContainer">
			{items.map((item, i) => {
				return <ShopItem item={item} key={i} />;
			})}
		</div>
	);
};

export default ListView;
