import { Avatar, Typography, Box, Stack, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Facebook } from "@mui/icons-material";

const ProfileHeader = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems={{ xs: "center", sm: "flex-start" }}
      gap={3}
      px={2}
      mt={{ xs: 2, sm: 0 }}
    >
      <Avatar
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt="profile"
        sx={{
          width: { xs: 100, sm: 120 },
          height: { xs: 100, sm: 120 },
          border: "4px solid white",
          mt: { xs: 0, sm: -8 },
        }}
      />
      <Box textAlign={{ xs: "center", sm: "left" }}>
        <Typography variant="h5" fontWeight="bold">
          Kevin Smith
        </Typography>
        <Typography color="text.secondary">
          Advisor and Consultant at Stripe Inc.
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          mt={1}
          alignItems="center"
          flexWrap="wrap"
          justifyContent={{ xs: "center", sm: "flex-start" }}
          sx={{ color: "text.secondary" }}
        >
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">Nuwaraeliya, Sri Lanka</Typography>

          <Link href="#" underline="hover" color="inherit">
            <Facebook fontSize="small" />
          </Link>
          <Typography variant="body2">Dilmi_Malee</Typography>

          <Link href="#" underline="hover" color="inherit">
            <LinkedInIcon fontSize="small" />
          </Link>
          <Typography variant="body2">Dilmi_Malee</Typography>

          <Link href="#" underline="hover" color="inherit">
            <TwitterIcon fontSize="small" />
          </Link>
          <Typography variant="body2">Dilmi_Malee</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
