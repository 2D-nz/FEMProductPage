import Image1 from "../assets/images/image-product-1.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image4 from "../assets/images/image-product-4.jpg";
import Image1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import Image2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import Image3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import Image4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";
import {
	SliderContainer,
	ImagesContainer,
	ArrowImages,
	Carousel,
	ThumbnailContainer,
	SliderImages,
	FullscreenCarousel,
} from "./styles/Slider.styles";

import Previous from "../assets/images/icon-previous.svg";
import Next from "../assets/images/icon-next.svg";
import { CartContext } from "../context/CartContext";

import { useState, useContext } from "react";
function Slider(propImage) {
	const sliderImages = [Image1, Image2, Image3, Image4];
	const [i, setI] = useState(0);
	const [image, setImage] = useState(sliderImages[i]);
	const { isOn, setOn, fSImage } = useContext(CartContext);
	console.log(propImage.image);

	const handleThumbnails = (e) => {
		if (!isOn) {
			setOn(true);
		} else {
			setImage(sliderImages[e - 1]);
		}
	};
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

		setImage(sliderImages[i]);
	};
	return (
		<ImagesContainer>
			<SliderContainer>
				<Carousel>
					<button onClick={() => handleImage("")}>
						<ArrowImages src={Previous} />
					</button>
					<button onClick={() => handleImage("next")}>
						<ArrowImages src={Next} />
					</button>
				</Carousel>

				<SliderImages src={image} />
			</SliderContainer>

			<ThumbnailContainer>
				<img
					id="1"
					src={Image1Thumbnail}
					alt="one shoe standing and one on the floor"
					onClick={(e) => handleThumbnails(e.target.id)}
				/>
				<img
					id="2"
					src={Image2Thumbnail}
					alt="shoe on top of two rocks"
					onClick={(e) => handleThumbnails(e.target.id)}
				/>
				<img
					id="3"
					src={Image3Thumbnail}
					alt="shoe on top of two rocks"
					onClick={(e) => handleThumbnails(e.target.id)}
				/>
				<img
					id="4"
					src={Image4Thumbnail}
					alt="shoe on top of two rocks"
					onClick={(e) => handleThumbnails(e.target.id)}
				/>
			</ThumbnailContainer>
		</ImagesContainer>
	);
}

export default Slider;
