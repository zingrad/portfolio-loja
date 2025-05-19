import { Container, Grid } from "@mui/material";

//Components
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterFour from "Components/Footer/FooterFour";
import BottomFooter from "Components/Footer/BottomFooter";

const Footer = () => {
    return (
        <Container maxWidth={false} disableGutters as="footer" sx={{ pt: "5em" }}>
            <Grid container spacing={{ xl: 13, lg: 10, md: 5, sm: 10, xxs: 5 }}>
                <Grid item md={6} sm={6}>
                    <FooterOne />
                </Grid>
                <Grid item md={6} sm={6} xxs={12}>
                    <FooterTwo />
                </Grid>
            </Grid>
            <BottomFooter />
        </Container>
    );
};
export default Footer;