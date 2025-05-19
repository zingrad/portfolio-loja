import { Box, Typography } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Slider from "Components/Client/Slider";

//Styles
import styles from "Styles/Client/Client.styles";

const Client = () => {
    return (
        <Box component="section" sx={styles.Container} id="client">
            <SectionHeading
                value1="O Que Nossos Clientes"
                value2="Dizem Sobre Nossas Lojas"
                border={true}
            />
            <Slider />
        </Box>
    );
};
export default Client;
