import { ThumbnailContainer } from "./styles/Slider.styles";
import Image1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import Image2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import Image3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import Image4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
function Thumbnails() {
	const { isOn, setOn } = useContext(CartContext);
	console.log(setOn);
	const handleChange = () => {};

	const handleThumbnails = () => {
		if (isOn) {
			handleChange();
		} else {
			setOn(true);
		}
	};
	return (
		<ThumbnailContainer>
			<img
				src={Image1Thumbnail}
				alt="one shoe standing and one on the floor"
				onClick={handleThumbnails}
			/>
			<img
				src={Image2Thumbnail}
				alt="shoe on top of two rocks"
				onClick={handleThumbnails}
			/>
			<img
				src={Image3Thumbnail}
				alt="shoe on top of two rocks"
				onClick={handleThumbnails}
			/>
			<img
				src={Image4Thumbnail}
				alt="shoe on top of two rocks"
				onClick={handleThumbnails}
			/>
		</ThumbnailContainer>
	);
}

export default Thumbnails;
