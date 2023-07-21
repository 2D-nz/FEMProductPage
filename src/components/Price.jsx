import { PriceContainer, PriceTag } from "./styles/Pricing.styles";

function Price() {
	return (
		<div>
			<PriceContainer>
				<div>
					<span>
						<PriceTag>$125.00</PriceTag>
					</span>
					<span>
						<b>50%</b>
					</span>
				</div>

				<p>$250.00</p>
			</PriceContainer>
		</div>
	);
}

export default Price;
