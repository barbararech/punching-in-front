import * as React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { Container } from './styles';
import AttachmentsForm from '../NewAttachmentsForm/index';
import StepsForm from '../NewStepsForm/index';
import ApplicationForm from '../NewApplicationForm/index';

export default function NewApplication(
  values,
  handleChange,
  handleSubmit,
  stepsGroup,
  setStepsGroup,
  attachmentsGroup,
  setAttachmentsGroup,
  editApplication
) {
  return (
    <Container>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography className="title" gutterBottom>
            {editApplication ? 'Edit Application' : 'New Application'}
          </Typography>
          {ApplicationForm(
            values.companyName,
            values.roleName,
            values.jobDescription,
            values.observations,
            values.priority,
            values.heardBack,
            handleChange
          )}
          {StepsForm(stepsGroup, setStepsGroup)}
          {AttachmentsForm(attachmentsGroup, setAttachmentsGroup)}
        </CardContent>
        <CardActions>
          <Button size="large" color="success" className="submitButton" onClick={handleSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
