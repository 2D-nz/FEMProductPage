import { useContext, useState } from "react";
import Minus from "../assets/images/icon-minus.svg";
import Plus from "../assets/images/icon-plus.svg";
import { AddButton, AddButtonContainer } from "./styles/Pricing.styles.js";
import ImageCart from "../assets/images/icon-cart.svg";
import {
	HandlePurchase,
	CountContainer,
	PurchaseContainer,
} from "./styles/HandlePurchase.styles";
import { CartContext } from "../context/CartContext";
import ImageThumb1 from "../assets/images/image-product-1-thumbnail.jpg";
function Purchase() {
	const [count, setCount] = useState(0);

	const { cart, setCart } = useContext(CartContext);

	const handleCount = (signal) => {
		if (signal == "minus") {
			if (count - 1 == -1) {
				return;
			} else setCount(count - 1);
		} else {
			setCount(count + 1);
		}
	};
	const handlePurchase = () => {
		const item = {
			image: `${ImageThumb1}`,
			name: "Fall Limited Edition Sneakers",
			price: parseFloat(125.0).toFixed(2),
			quantity: count,
		};

		if (count == 0) {
			setCart(false);
			console.log(cart);
		} else {
			setCart(item);
		}
	};
	return (
		<PurchaseContainer>
			<HandlePurchase>
				<CountContainer>
					<button onClick={() => handleCount("minus")}>
						<img src={Minus} />
					</button>
					<p>{count}</p>
					<button onClick={() => handleCount("plus")}>
						<img src={Plus} />
					</button>
				</CountContainer>
				<AddButtonContainer>
					<AddButton onClick={handlePurchase}>
						<img src={ImageCart} />
						<p> Add to Cart</p>
					</AddButton>
				</AddButtonContainer>
			</HandlePurchase>
		</PurchaseContainer>
	);
}

export default Purchase;
