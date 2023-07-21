import {
	BrandName,
	ShoeName,
	DescriptionText,
	DescriptionContainer,
} from "./styles/Description.styles";
import Pricing from "./Pricing.jsx";
function Description() {
	return (
		<DescriptionContainer>
			<BrandName>SNEAKER COMPANY</BrandName>
			<ShoeName>Fall Limited Edition Sneakers</ShoeName>
			<DescriptionText>
				{
					"Theses low-profile sneakers are a perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
				}
			</DescriptionText>
			<Pricing />
		</DescriptionContainer>
	);
}

export default Description;
