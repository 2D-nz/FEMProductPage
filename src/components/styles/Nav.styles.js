import styled from "styled-components";

export const NavContainer = styled.nav`
	margin: 1rem 0;

	@media (min-width: 800px) {
		margin: 0px;
	}
`;

export const Hamburguer = styled.img``;

export const Logo = styled.img`
	@media (min-width: 800px) {
		height: 100%;
	}
`;

export const NavMobile = styled.nav`
	@media (min-width: 800px) {
		display: none;
	}

	display: flex;
	justify-content: space-between;
	padding: 0.1rem;
	img {
		margin: 0 0.5rem;
		height: 15px;
	}
`;

export const Avatar = styled.img`
	width: 15px;

	@media (min-width: 800px) {
		width: 40%;
	}

	&:hover {
		outline: 2px solid hsl(26, 100%, 55%);
		border-radius: 5rem;
	}
`;

export const NavDesktop = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	vertical-align: center;
	margin: 1.5rem 10rem;
	div {
		margin: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
	@media (max-width: 800px) {
		display: none;
	}

	img:hover {
		cursor: pointer;
	}
`;

export const Notification = styled.p`
	position: absolute;
	margin: 0;
	padding: 0.1rem 0.4rem;
	font-size: 8px;
	border-radius: 80%;
	color: white;
	background-color: ${(props) =>
		props.cart ? "hsl(26, 100%, 55%);" : "#ffffff"};
	top: 0.5rem;
	content: ${(props) => (props.cart ? "" : "")};
	right: 2rem;

	@media (min-width: 800px) {
		top: 2rem;
		right: 15.5rem;
		font-size: 12px;
	}
`;
