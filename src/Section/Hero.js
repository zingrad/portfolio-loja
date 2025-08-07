import { Container, Box } from "@mui/material";

//Components
import HeroContent from "Components/Hero/HeroContent";

// Images
import HeroPng from "Assets/hero/hero.jpg";


//Styles
import styles from "Styles/Hero/Hero.styles";

const Hero = () => {
    return (
        <Container maxWidth={false} disableGutters sx={styles.Container} as="section" id="home">
            <HeroContent />
            <Box component="img" src={HeroPng} alt="Hero Svg" sx={styles.HeroImage} />
        </Container>
    );
};
export default Hero;