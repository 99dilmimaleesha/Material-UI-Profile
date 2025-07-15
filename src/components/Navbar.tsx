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
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 2,
          py: { xs: 2, sm: 1 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Typography variant="h6">Adviser</Typography>

        <TextField
          size="small"
          placeholder="Search professionals"
          variant="outlined"
          sx={{ width: { xs: "100%", sm: "300px" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="outlined"
          sx={{ alignSelf: { xs: "stretch", sm: "auto" }, width: { xs: "100%", sm: "auto" } }}
        >
          Sign up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

