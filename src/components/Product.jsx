import { ProductContainer, Thumbnail, Trashcan } from "./styles/Product.styles";
import TrashIcon from "../assets/images/icon-delete.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product(props) {
	const product = props.cart;

	const setCart = useContext(CartContext).setCart;

	console.log(setCart);

	return (
		<ProductContainer>
			<Thumbnail src={product.image} />
			<div>
				<p>
					{product.name}
					<br />${product.price} x{product.quantity}{" "}
					<b>${(product.price * product.quantity).toFixed(2)}</b>
				</p>
			</div>
			<Trashcan src={TrashIcon} onClick={() => setCart(false)} />
		</ProductContainer>
	);
}

export default Product;
