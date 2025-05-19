import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import { Link } from "react-scroll";

//Icons
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Images
import AboutImage from "Assets/about/about.png";

//Styles
import styles from "Styles/About/Myselft.styles";

const Myself = () => {
    return (
        <Box sx={styles.Container}>
            <Box sx={{ width: { md: "35%", xxs: "100%" } }}>
                <Typography variant="h4" component="h4" sx={styles.Title}>
                    Conheça a <br />
                    Loja no Ar
                </Typography>
                <Typography variant="body1" component="p" sx={styles.Description}>
                  Construímos lojas virtuais pensadas para o seu público, com design responsivo e tecnologia que acompanha o crescimento da sua empresa.
                </Typography>
                <Box sx={{ my: "28px" }}>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            100% satisfação dos clientes
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            Lojas rápidas, responsivas e fáceis de usar
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            Suporte dedicado e atendimento personalizado
                        </Typography>
                    </Stack>
                </Box>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <ButtonBase sx={styles.Button}>
                        Fale Conosco
                        <ArrowForwardTwoToneIcon />
                    </ButtonBase>
                </Link>
            </Box>
            <Box component="img" src={AboutImage} alt="Sobre Loja no Ar" sx={styles.Image} />
        </Box>
    );
};
export default Myself;
