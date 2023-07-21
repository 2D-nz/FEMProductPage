import styled from "styled-components";

export const SidebarContainer = styled.aside`
	overflow-x: hidden;
	height: 100vh;
	width: ${(props) => (props.open ? "70%" : "0px")};
	position: fixed;
	z-index: 30;
	top: 0;
	left: 0;
	background-color: white;
	transition: all ease-in 0.25s;
`;

export const Overlay = styled.div`
	background-color: rgb(0, 0, 0, 0.75);
	z-index: 27;
	width: ${(props) => (props.open ? "100%" : "0px")};
	top: 0;
	position: fixed;
	margin: 0px;
	padding: 0px;
	height: 110vh;
	overflow-x: hidden;
`;

export const CloseIcon = styled.img`
	padding: 1rem;
`;

export const ListContainer = styled.ul`
	@media (min-width: 800px) {
		display: flex;
		gap: 1rem;
	}
`;

export const ListItem = styled.li`
	list-style-type: none;
	font-weight: 700;
	margin: 1rem 0;

	@media (min-width: 800px) {
		color: hsl(220, 14%, 75%);
		margin: 0;
	}

	&:hover {
		color: black;
		cursor: pointer;
	}
`;

export const FullscreenOverlay = styled(Overlay)`
	z-index: 2;
`;

export const FullscreenCloseIcon = styled.img`
	z-index: 49;
	padding-left: 20rem;
	&:hover {
		filter: invert(63%) sepia(33%) saturate(5783%) hue-rotate(346deg)
			brightness(103%) contrast(104%);
	}
	cursor: pointer;
`;
