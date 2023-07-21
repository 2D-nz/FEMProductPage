import styled from "styled-components";

export const ProductContainer = styled.div`
	display: flex;
	align-items: center;
	jusitfy-content: space-around;
	gap: 0.5rem;

	p {
		color: hsl(219, 9%, 45%);
	}
	b {
		color: black;
	}
`;

export const Thumbnail = styled.img`
	height: 40px;
`;

export const Trashcan = styled.img`
	height: 100%;
`;
