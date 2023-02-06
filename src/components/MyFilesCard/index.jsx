import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from './styles';

export default function MyFilesCard() {
  return (
    <Container>
      <Card sx={{ minWidth: 545 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            File Name
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Company name - Role name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type
          </Typography>
        </CardContent>
        <CardActions sx={{ width: '95%', display: 'flex', justifyContent: 'flex-end' }}>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
