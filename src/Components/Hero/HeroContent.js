import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

// Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="h2" component="h2" sx={styles.Title}>
                Nós somos a<br />
                Négocio no Ar
            </Typography>
            <Typography variant="h6" component="h6" sx={styles.Slogan}>
                Seu negócio online começa agora
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Criamos lojas virtuais profissionais para você vender na internet com segurança, agilidade e tudo pronto para crescer.
            </Typography>
            <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
            >
                <ButtonBase sx={styles.Button}>
                    Ver projetos
                    <ArrowForwardTwoToneIcon />
                </ButtonBase>
            </Link>
        </Box>
    );
};

export default HeroContent;
