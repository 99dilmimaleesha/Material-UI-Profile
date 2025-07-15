import { Avatar, Typography, Box, Stack, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../style/profileHeader.css";
import { Facebook } from "@mui/icons-material";

const ProfileHeader = () => {
  return (
    <Box display="flex" alignItems="center" gap={3} className="profileheader">
      <Avatar
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt="profile"
        sx={{ width: 120, height: 120, border: "4px solid white", mt: -8 }}
      />
      <Box>
        <Typography variant="h5" fontWeight="bold">
          Kevin Smith
        </Typography>
        <Typography color="text.secondary">
          Advisor and Consultant at Stripe Inc.
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          mt={1}
          alignItems="center"
          sx={{ color: "text.secondary" }}
        >
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">Nuwaraeliya, Sri Lanka</Typography>
          <Link href="#" underline="hover">
            <Facebook />
          </Link>
          <Typography variant="body2">Dilmi_Malee</Typography>
          <Link href="#" underline="hover">
            <LinkedInIcon />
          </Link>
          <Typography variant="body2">Dilmi_Malee</Typography>
          <Link href="#" underline="hover">
            <TwitterIcon />
          </Link>
          <Typography variant="body2">Dilmi_Malee</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
