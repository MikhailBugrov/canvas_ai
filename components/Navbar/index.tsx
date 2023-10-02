import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Home, Description } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav>
      <AppBar
        position="static"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="large" color="secondary" component={Link} href="/">
            <Home sx={{ fontSize: 40 }} />
          </Button>
          <Button
            size="large"
            color="secondary"
            component={Link}
            href="/documentation"
          >
            <Description fontSize="large" />
          </Button>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
