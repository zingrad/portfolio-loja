import { useState } from "react";
import { Stack, Box, Divider, ButtonBase, Typography, Dialog } from "@mui/material";

//Components
import Privacy from "./BottomFooter/Privacy";
import Terms from "./BottomFooter/Terms";

//Styles
import styles from "Styles/Footer/BottomFooter.styles";

const BottomFooter = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = (name) => () => {
        setOpen(name);
        const header = document.querySelector('header');
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        header.style.paddingRight = `${scrollBarWidth}px`;
    };
    const handleClose = () => {
        setOpen(false);
    };
    const RemovePadding = () => {
        const header = document.querySelector('header');
        header.style.paddingRight = "0px";
    }
    return (
        <Box>
            <Divider sx={styles.Divider} />
            <Box sx={{ display: { smd: "block", xxs: "none" } }}>
                <Stack direction="row" sx={{ alignItems: "center" }}>
                    <Typography variant="body1" component="p" sx={styles.Copyright}>
                        © {new Date().getFullYear()} Negócio no Ar. Todos os direitos reservados.
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};
export default BottomFooter;