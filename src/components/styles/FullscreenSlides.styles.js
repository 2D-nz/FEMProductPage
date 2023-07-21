import styled from "styled-components";

export const FullscreenSlidesContainer = styled.div`
	position: absolute;
	height: 100%;
	display: ${(props) => (props.on ? "grid" : "none")};
	place-items: center;

	div:has(img) {
		z-index: 50;
	}

	@media (max-width: 800px) {
		display: none;
	}
`;
