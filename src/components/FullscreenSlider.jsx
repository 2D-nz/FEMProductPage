import Image1 from "../assets/images/image-product-1.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image4 from "../assets/images/image-product-4.jpg";
import { useContext, useState } from "react";
import Slider from "./Slider";
import { FullscreenSlidesContainer } from "./styles/FullscreenSlides.styles";
import { CartContext } from "../context/CartContext";
import { FullscreenCloseIcon } from "./styles/Sidebar.styles";
import CloseIconImage from "../assets/images/icon-close.svg";

import Previous from "../assets/images/icon-previous.svg";
import Next from "../assets/images/icon-next.svg";
import { FullscreenOverlay } from "./styles/Sidebar.styles";
function FullscreenSlider() {
	const sliderImages = [Image1, Image2, Image3, Image4];
	const [i, setI] = useState(0);
	const handleImage = (sign) => {
		if (sign == "next") {
			if (i + 1 == 4) {
				setI(0);
			} else {
				setI(i + 1);
			}
		} else {
			if (i - 1 == -1) {
				setI(3);
			} else {
				setI(i - 1);
			}
		}
		setFSImage(sliderImages[i]);
		console.log(fSImage);
	};

	const { isOn, setOn, fSImage, setFSImage } = useContext(CartContext);
	return (
		<FullscreenSlidesContainer on={isOn}>
			<FullscreenOverlay open={isOn} onClick={() => setOn(false)} />
			<FullscreenCloseIcon src={CloseIconImage} onClick={() => setOn(false)} />
			<Slider image={fSImage} />
		</FullscreenSlidesContainer>
	);
}

export default FullscreenSlider;
