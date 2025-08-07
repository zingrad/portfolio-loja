import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Icons
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, BehaceIcon } from "Utilis/Icons";
import GitHubIcon from '@mui/icons-material/GitHub';

// Logo
import Logo from "Assets/header/logo.png";

// Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
    return (
        <Box>
            <Box sx={{ mb: "30px" }}>
                <Image src={Logo} width={250} height={250} alt="Logo Loja Expert" />
            </Box>


            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <PhoneIcon />
                </Box>
                <Box>
                    <Link href="https://w.app/ltv5t0" passHref>
                        <a>
                            <Typography variant="body1" component="p">
                                +55 11 95749-5187
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>

            {/* Redes sociais */}
            <Stack direction="row" sx={styles.Social}>
                <Link href="https://github.com/seuusuario" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <ButtonBase>
                            <GitHubIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="https://www.facebook.com/sualoja" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <ButtonBase>
                            <FacebookIcon />
                        </ButtonBase>
                    </a>
                </Link>
            </Stack>
        </Box>
    );
};

export default FooterOne;
