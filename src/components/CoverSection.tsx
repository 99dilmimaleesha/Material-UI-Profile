import { Box } from '@mui/material';

const CoverSection = () => {
  return (
    <Box
      component="img"
      src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Cover"
      sx={{
        width: '100%',
        height: 200,
        objectFit: 'cover',
      }}
    />
  );
};

export default CoverSection;

