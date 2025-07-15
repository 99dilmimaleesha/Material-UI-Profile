import { Card, CardContent, Typography, Button } from '@mui/material';

const CardSection = () => {
  return (
    <Card sx={{ bgcolor: '#d2f1f7', textAlign: 'center' }}>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          LOAN CALCULATOR
        </Typography>
        <Typography variant="body2" gutterBottom>
          Get great rates and an effortless close.
        </Typography>
        <Button variant="outlined" size="small">Calculate →</Button>
      </CardContent>
    </Card>
  );
};

export default CardSection;
