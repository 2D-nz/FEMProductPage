import {
	SidebarContainer,
	CloseIcon,
	Overlay,
	ListContainer,
	ListItem,
} from "./styles/Sidebar.styles";
import CloseIconImage from "../assets/images/icon-close.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Sidebar = () => {
	const { open, setOpen } = useContext(CartContext);

	return (
		<div>
			<SidebarContainer open={open}>
				<CloseIcon src={CloseIconImage} onClick={() => setOpen(false)} />
				<ListContainer>
					<ListItem>Collections</ListItem>
					<ListItem>Men</ListItem>
					<ListItem>Women</ListItem>
					<ListItem>About</ListItem>
					<ListItem>Contact</ListItem>
				</ListContainer>
			</SidebarContainer>
			<Overlay open={open} onClick={() => setOpen(false)} />
		</div>
	);
};

export default Sidebar;
