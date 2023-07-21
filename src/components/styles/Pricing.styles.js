import styled from "styled-components";

export const AddButton = styled.button`
	background-color: hsl(26, 100%, 55%);
	color: white;
	border: none;
	border-radius: 5px;
	align-items: center;
	display: flex;
	width: 90%;
	justify-content: center;
	height: 2.5rem;
	margin: 1rem 1rem 3rem;

	img {
		margin: 1rem;
	}
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		margin: 0 0.5rem;
	}

	span ~ span {
		color: hsl(26, 100%, 55%);
		background-color: hsl(25, 100%, 94%);
		text-align: center;
		margin: 0 1rem;
		padding: 0rem 0.5rem;
	}

	p {
		text-decoration-line: line-through;
		color: hsl(220, 14%, 75%);
	}

	@media (min-width: 800px) {
		display: grid;

		p {
			font-size: 12px;
			padding-left: 0.25rem;
		}
	}
`;

export const PriceTag = styled.b`
	font-size: 22px;
	vertical-align: center;
`;

export const AddButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	color: white;
	margin: 0;
	padding: 0;
	img {
		margin: 0 1rem;
		padding: 0;
		filter: brightness(5);
	}
	button {
		cursor: pointer;
		margin: 0;
	}

	button: active {
		background-color: hsl(25, 100%, 94%);
	}
`;
