import { CartContainer, Products, CheckoutButton } from "./styles/Cart.styles";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Product from "./Product.jsx";
function Cart() {
	const { cart, isVisible } = useContext(CartContext);

	return (
		<CartContainer visible={isVisible}>
			<div>
				<b> Cart </b>
				<hr />
			</div>
			<Products>
				{!cart ? (
					<p>You cart is empty</p>
				) : (
					<div>
						<Product cart={cart} />
						<CheckoutButton>Checkout</CheckoutButton>
					</div>
				)}
			</Products>
		</CartContainer>
	);
}

export default Cart;
