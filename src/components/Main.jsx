import { MainContainer } from "./styles/MainContainer.styles";
import Slider from "./Slider.jsx";
import Description from "./Description.jsx";
import FullscreenSlider from "./FullscreenSlider";
function Main() {
	return (
		<MainContainer>
			<FullscreenSlider />
			<Slider />
			<Description />
		</MainContainer>
	);
}

export default Main;
