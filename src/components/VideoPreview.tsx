import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const VideoPreview = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/400x140?text=Introduction"
        alt="intro"
      />
      <CardContent sx={{ position: 'relative', textAlign: 'center' }}>
        <Typography variant="h6">Introduction</Typography>
        <IconButton sx={{ position: 'absolute', top: '40%', left: '45%' }}>
          <PlayCircleIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default VideoPreview;
