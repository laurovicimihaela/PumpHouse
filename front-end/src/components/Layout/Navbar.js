import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { StyledButton } from "../../styles/Styles";
import { NavLink } from "react-router-dom";
const pages = ["Gyms", "Classes", "Trainers", "Prices"];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" color="transparent">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            sx={{ color: "#fff" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                                "& .MuiMenu-list": {
                                    backgroundColor: "#000",
                                },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <NavLink
                                            to={`/${page}`}
                                            style={{
                                                textDecoration: "none",
                                                color: "#fff",
                                                display: "block",
                                            }}
                                        >
                                            {page}
                                        </NavLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "#fff",
                            textDecoration: "none",
                        }}
                    >
                        PumpHouse
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "#fff",
                            textDecoration: "none",
                        }}
                    >
                        PumpHouse
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "flex-start",
                            marginLeft: 5,
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: "block" }}
                            >
                                <NavLink
                                    to={`/${page}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "#fff",
                                    }}
                                >
                                    {page}
                                </NavLink>
                            </Button>
                        ))}
                    </Box>
                    <Box
                        justifyContent={"flex-end"}
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        <StyledButton>Login</StyledButton>
                        <StyledButton variant="contained">Register</StyledButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
