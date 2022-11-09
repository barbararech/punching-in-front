import * as React from 'react';
import { Typography, TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { ContainerTasks } from '../NewApplication/styles';

export default function TasksForm(stepsGroup, setStepsGroup) {
  let handleChange = (i, e) => {
    let newStepsGroup = [...stepsGroup];
    newStepsGroup[i][e.target.name] = e.target.value;
    setStepsGroup(newStepsGroup);
  };

  let addFormFields = () => {
    setStepsGroup([...stepsGroup, { name: '', deadline: '', itsFinished: '' }]);
  };

  let removeFormFields = (i) => {
    let newStepsGroup = [...stepsGroup];
    newStepsGroup.splice(i, 1);
    setStepsGroup(newStepsGroup);
  };

  return (
    <ContainerTasks>
      <Typography className="subtitle" gutterBottom>
        Tasks
        <button className="buttonAdd" type="button" onClick={() => addFormFields()}>
          <AddCircleOutlineIcon className="addIcon" />
        </button>
      </Typography>
      <form>
        {stepsGroup.map((element, index) => (
          <>
            <Typography className="paragraph" gutterBottom>
              Task {index + 1}
              {index ? (
                <button type="button" className="button remove" onClick={() => removeFormFields(index)}>
                  <RemoveCircleOutlineIcon className="removeIcon" />
                </button>
              ) : null}
            </Typography>

            <div className="form-inline" key={index}>
              <TextField
                id="taskName"
                label="task name"
                variant="standard"
                color="success"
                type="text"
                name="name"
                value={element.name || ''}
                onChange={(e) => handleChange(index, e)}
                fullWidth
                required
              />
              <TextField
                id="taskDeadline"
                label="deadline"
                variant="standard"
                color="success"
                type="text"
                name="deadline"
                value={element.deadline || ''}
                onChange={(e) => handleChange(index, e)}
                fullWidth
                required
                helperText="Enter a date in the format 'DD/MM/YYYY'"
              />

              <FormControl fullWidth className="selectInputTasks">
                <InputLabel id="itsFinished">its Finished?</InputLabel>
                <Select
                  labelId="its Finished?"
                  id="itsFinished"
                  name="itsFinished"
                  value={element.itsFinished}
                  label="its Finished?"
                  onChange={(e) => handleChange(index, e)}
                  color="success"
                  fullWidth
                  required
                >
                  <MenuItem value={true}>yes</MenuItem>
                  <MenuItem value={false}>no</MenuItem>
                </Select>
              </FormControl>
            </div>
          </>
        ))}
      </form>
    </ContainerTasks>
  );
}
