import React from "react";
import IconSwitch from "./IconSwitch";
import CardView from "./Card/CardView";
import ListView from "./List/ListView";

class Store extends React.Component {
	constructor({ products }) {
		super();
		this.state = { icon: "view_list" };
		this.products = products;
	}

	onSwitch = () => {
		if (this.state.icon === "view_list") {
			this.setState({ icon: "view_module" });
		} else {
			this.setState({ icon: "view_list" });
		}
	};

	render() {
		if (this.state.icon === "view_list") {
			return (
				<div>
					<IconSwitch
						icon={this.state.icon}
						onSwitch={this.onSwitch}
					/>
					<ListView items={this.products} />
				</div>
			);
		} else {
			return (
				<div>
					<IconSwitch
						icon={this.state.icon}
						onSwitch={this.onSwitch}
					/>
					<CardView cards={this.products} />
				</div>
			);
		}
	}
}

export default Store;
