import {
	NavContainer,
	Hamburguer,
	NavMobile,
	NavDesktop,
	Logo,
	Notification,
	Avatar,
} from "./styles/Nav.styles";

import { ListContainer, ListItem } from "./styles/Sidebar.styles";
import ImageHamburguer from "../assets/images/icon-menu.svg";
import ImageLogo from "../assets/images/logo.svg";
import ImageCart from "../assets/images/icon-cart.svg";

import ImageAvatar from "../assets/images/image-avatar.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Nav() {
	const { cart, isVisible, setVisible, open, setOpen } =
		useContext(CartContext);
	console.log(cart == null);

	return (
		<NavContainer>
			<NavMobile>
				<div>
					<Hamburguer src={ImageHamburguer} onClick={() => setOpen(true)} />
					<Logo src={ImageLogo} />
				</div>

				<div>
					<Notification cart={cart}>{cart ? cart.quantity : ""}</Notification>
					<img src={ImageCart} onClick={() => setVisible(!isVisible)} />
					<Avatar src={ImageAvatar} />
				</div>
			</NavMobile>
			<NavDesktop>
				<div>
					<Logo src={ImageLogo} />
					<ListContainer>
						<ListItem>Collections</ListItem>
						<ListItem>Men</ListItem>
						<ListItem>Women</ListItem>
						<ListItem>About</ListItem>
						<ListItem>Contact</ListItem>
					</ListContainer>
				</div>
				<div>
					<Notification cart={cart}>
						{cart && cart.quantity > 0 ? cart.quantity : ""}
					</Notification>
					<img src={ImageCart} onClick={() => setVisible(!isVisible)} />
					<Avatar src={ImageAvatar} />
				</div>
			</NavDesktop>
		</NavContainer>
	);
}

export default Nav;
