import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

//Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, BehaceIcon } from "Utilis/Icons";

//Logo
import Logo from "Assets/header/logo.png";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
    return (
        <Box>
            <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box sx={{ flex: 1, mt: "5px" }}>
                    <Image src={Logo} width={150} height={150} alt="Loja no Ar Logo" />
                </Box>
                <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
                    <CloseRoundedIcon />
                </ButtonBase>
            </Stack>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Somos a <strong>Loja no Ar</strong>, especialistas em criar lojas virtuais personalizadas para empresas de todos os tamanhos. Unimos design, tecnologia e performance para transformar sua presença online e aumentar suas vendas. Nosso compromisso é entregar soluções completas, funcionais e com ótima usabilidade.
            </Typography>
            <Box sx={styles.Navs}>
                {Navs &&
                    Navs.map((nav, i) => (
                        <Scroll
                            key={i}
                            activeClass='active'
                            to={nav.Id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={toggleDrawer(false)}
                        >
                            <ButtonBase sx={styles.Buttons}>
                                {nav.name}
                            </ButtonBase>
                        </Scroll>
                    ))
                }
            </Box>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <EmailIcon />
                </Box>
                <Box>
                    <Link href="mailto:contato@lojanar.com.br" passHref>
                        <a>
                            <Typography variant="body1" component="p">
                                contato@lojanar.com.br
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <PhoneIcon />
                </Box>
                <Box>
                    <Link href="tel:+5511999999999" passHref>
                        <a>
                            <Typography variant="body1" component="p">
                                +55 (11) 99999-9999
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Social}>
                <Link href="https://www.facebook.com/lojanar" passHref>
                    <a target="_blank">
                        <ButtonBase>
                            <FacebookIcon />
                        </ButtonBase>
                    </a>
                </Link>
                  <Link href="https://www.instagram.com/lojanar" passHref>
                    <a target="_blank">
                        <ButtonBase>
                            <FacebookIcon />
                        </ButtonBase>
                    </a>
                </Link>
            </Stack>
        </Box>
    );
};

export default Drawers;
