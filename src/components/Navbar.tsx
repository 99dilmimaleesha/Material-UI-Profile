import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Adviser</Typography>

        <TextField
          size="small"
          placeholder="Search professionals"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="outlined">Sign up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
