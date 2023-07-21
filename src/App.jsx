import Image1 from "./assets/images/image-product-1.jpg";
import { useMemo, useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { CartContext } from "./context/CartContext.jsx";
import Cart from "./components/Cart";
function App() {
	const [cart, setCart] = useState(null);
	const [isVisible, setVisible] = useState(null);
	const [open, setOpen] = useState(false);
	const [isOn, setOn] = useState(false);
	const [fSImage, setFSImage] = useState(Image1);
	const providerValue = useMemo(
		() => ({
			cart,
			setCart,
			isVisible,
			setVisible,
			open,
			setOpen,
			isOn,
			setOn,
			fSImage,
			setFSImage,
		}),

		[
			cart,
			setCart,
			isVisible,
			setVisible,
			open,
			setOpen,
			isOn,
			setOn,
			fSImage,
			setFSImage,
		]
	);

	console.log(providerValue);
	return (
		<CartContext.Provider value={providerValue}>
			<div>
				<Sidebar />
				<Cart />
				<Nav />
				<Main />
			</div>
		</CartContext.Provider>
	);
}

export default App;
