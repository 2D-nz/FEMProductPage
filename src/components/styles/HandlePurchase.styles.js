import styled from "styled-components";

export const CountContainer = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	background-color: hsl(223, 64%, 98%);
	button {
		border: none;
		background-color: transparent;
		padding: 1rem;
		border-radius: 0.5rem;
	}
	button:hover {
		cursor: pointer;
	}
`;

export const HandlePurchase = styled.div`
	display: grid;
	place-items: center;

	@media (min-width: 800px) {
		grid-template-columns: 1fr 2fr;
	}
`;

export const PurchaseContainer = styled.div``;
