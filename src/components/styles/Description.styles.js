import styled from "styled-components";

export const BrandName = styled.h6`
	color: hsl(26, 100%, 55%);
	font-weight: 700;
	margin: 0;
`;

export const ShoeName = styled.h2`
	margin: 0.5rem 0;
	@media (min-width: 800px) {
		font-size: 40px;
	}
`;

export const DescriptionText = styled.p`
	color: hsl(219, 9%, 45%);
`;

export const DescriptionContainer = styled.div`
	margin: 1rem;

	@media (min-width: 800px) {
		margin: 0;
	}
`;
