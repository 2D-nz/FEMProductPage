import styled from "styled-components";

export const SliderContainer = styled.div`
	height: 250px;
	overflow-y: hidden;
	button {
		background-color: white;
		border: none;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button:active > img {
		filter: invert(63%) sepia(33%) saturate(5783%) hue-rotate(346deg)
			brightness(103%) contrast(104%);
	}
	@media (min-width: 800px) {
		border-radius: 5%;
		height: 300px;
	}
`;

export const SliderImages = styled.img`
	height: 100%;
	@media (max-width: 800px) {
		width: 100%;
		transform: translateY(-10%);
	}
`;

export const ArrowImages = styled.img`
	width: 50%;
`;

export const ThumbnailContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: space-between;
	img {
		width: 50px;
		border-radius: 10%;
	}

	img:hover {
		outline: 2px solid hsl(26, 100%, 55%);
		opacity: 0.75;
		cursor: pointer;
	}

	@media (max-width: 800px) {
		display: none;
	}
`;

export const Carousel = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin-top: 6.5rem;
	margin-left: 1rem;
	z-index: 5;

	@media (min-width: 800px) {
		display: none;
	}
`;

export const ImagesContainer = styled.div`
	height: 100%;
`;

export const FullscreenCarousel = styled(Carousel)`
	display: none;
	@media (min-width: 800px) {
		display: ${(props) => (props.on ? "flex" : "none")};
		width: 100%;
		margin-top: -2rem;
		margin-left: 0;

		button {
			background-color: white;
			border: none;
			border-radius: 50%;
			margin: 0 -1rem;
			width: 30px;
			height: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		button:active > img {
			filter: invert(63%) sepia(33%) saturate(5783%) hue-rotate(346deg)
				brightness(103%) contrast(104%);
		}
	}
`;
