import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Description } from './styles';
import { Link } from '@mui/material';

export default function MyFilesCard({ id, companyName, roleName, type, link, name }) {
  return (
    <Container>
      <Card sx={{ minWidth: 545 }} key={id}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Description>
            <Typography variant="body1" sx={{ fontWeight: '500', marginBottom: '10px' }} color="text.primary">
              {companyName} - {roleName}
            </Typography>
            <Typography color="text.secondary" className="tag">
              {type}
            </Typography>
          </Description>
        </CardContent>
        <CardActions sx={{ width: '95%', display: 'flex', justifyContent: 'flex-end' }}>
          <Button size="small" sx={{ marginTop: '-10px' }}>
            <Link href={link} underline="none">
              View
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
