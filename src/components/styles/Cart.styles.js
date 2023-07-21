import styled from "styled-components";

export const CartContainer = styled.div`
	position: absolute;
	display: ${(props) => (props.visible ? "block" : "none")};
	z-index: 20;
	margin-top: 3rem;
	border-radius: 0.5rem;
	margin-left: 0.5rem;
	width: 95%;
	background-color: hsl(0, 0%, 100%);
	height: 200px;

	& > div {
		margin-top: 1rem;
	}
	div > b {
		margin: 2rem;
	}
	div > hr {
		margin: 1rem 0;
	}

	@media (min-width: 800px) {
		width: 375px;
		-webkit-box-shadow: 3px 10px 29px -3px rgba(112, 110, 112, 1);
		-moz-box-shadow: 3px 10px 29px -3px rgba(112, 110, 112, 1);
		box-shadow: 3px 10px 29px -3px rgba(112, 110, 112, 1);

		margin-left: 60%;
	}
`;

export const Products = styled.div`
	display: grid;
	place-items: center;

	& > p {
		font-weight: 700;
		color: hsl(219, 9%, 45%);
		padding-top: 1rem;
	}
`;

export const CheckoutButton = styled.button`
	background-color: hsl(26, 100%, 55%);
	border: none;
	border-radius: 0.25rem;
	width: 100%;
	padding: 0.8rem;
	color: white;
	font-weight: 700;
`;
