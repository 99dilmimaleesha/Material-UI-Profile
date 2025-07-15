import Navbar from "../components/Navbar";
import CoverSection from "../components/CoverSection";
import ProfileHeader from "../components/ProfileHeader";
import ContactInfo from "../components/ContactInfo";
import VideoPreview from "../components/VideoPreview";
import CardSection from "../components/CardSection";
import { Box, Container, Grid } from "@mui/material";

export default function ProfilePage() {
  return (
    <Box>
      <Navbar />

      <CoverSection />
      <ProfileHeader />
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ContactInfo />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <VideoPreview />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <CardSection />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
