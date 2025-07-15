import { Box, Typography, Button, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';

const ContactInfo = () => {
  return (
    <Box>
      <Stack spacing={1} mb={2}>
        <Typography><PhoneIcon fontSize="small" /> +79110018830 (Office)</Typography>
        <Typography><PhoneIcon fontSize="small" /> +74967411177 (Mobile)</Typography>
        <Typography><EmailIcon fontSize="small" /> kevin.smith@stripe.com</Typography>
      </Stack>
      <Button variant="contained" fullWidth startIcon={<ChatIcon />}>Chat</Button>
      <Typography mt={2} variant="h6">4.5 ★</Typography>
      <Typography variant="body2">163 reviews</Typography>
    </Box>
  );
};

export default ContactInfo;
