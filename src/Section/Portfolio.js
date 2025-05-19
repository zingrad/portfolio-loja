import { useState, useRef, useEffect } from "react";
import { Container, Tab, Box, Fade, Slide } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';

// Componentes
import SectionHeading from "Utilis/SectionHeading";
import Work from "Components/Portfolio/Work";

// Dados
import Portfolios from "Data/Portfolio/Portfolio.data";

// Estilos
import Particle from "Assets/portfolio/particle.png";
import styles from "Styles/Portfolio/Portfolio.styles";

const Portfolio = () => {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('1');
    const containerRef = useRef(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        let filtro = "";
        switch (value) {
            case '1':
                filtro = "loja";
                break;
            case '2':
                filtro = "institucional";
                break;
            case '3':
                filtro = "landing";
                break;
            case '4':
                filtro = "design";
                break;
            default:
                filtro = "loja";
        }

        const filtrados = Portfolios.filter((item) => item.filter === filtro);
        setItems(filtrados);
    }, [value]);

    return (
        <Container maxWidth={false} disableGutters as="section" sx={styles.Container} id="portfolio">
            <SectionHeading
                value1="Projetos Recentes"
                value2="Feitos para Clientes"
                border={false}
            />

            <TabContext value={value}>
                <Box sx={{ mt: "3em" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="portfolio-tabs"
                        TabIndicatorProps={{ style: { display: "none" } }}
                        sx={styles.ButtonGroup}
                    >
                        <Tab label="Lojas Virtuais" value="1" />
                        <Tab label="Sites Institucionais" value="2" />
                        <Tab label="Landing Pages" value="3" />
                        <Tab label="Identidade Visual" value="4" />
                    </TabList>
                </Box>

                <TabPanel value={value} sx={{ pr: "0px", mt: "15px" }}>
                    <Box ref={containerRef}>
                        <Fade in timeout={2000}>
                            <Box>
                                <Slide in timeout={800} direction="left" container={containerRef.current}>
                                    <Box>
                                        <Work works={items} />
                                    </Box>
                                </Slide>
                            </Box>
                        </Fade>
                    </Box>
                </TabPanel>
            </TabContext>

            <Box component="img" src={Particle} alt="particle" sx={styles.Particle} />
        </Container>
    );
};

export default Portfolio;
