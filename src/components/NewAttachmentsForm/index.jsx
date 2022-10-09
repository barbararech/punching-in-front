import * as React from "react";
import {
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { ContainerTasks } from "../NewCard/styles";

export default function AttachmentsForm(attachmentsGroup, setAttachmentsGroup) {
  let handleChange = (i, e) => {
    let newAttachmentsGroup = [...attachmentsGroup];
    newAttachmentsGroup[i][e.target.name] = e.target.value;
    setAttachmentsGroup(newAttachmentsGroup);
  };

  let addFormFields = () => {
    setAttachmentsGroup([
      ...attachmentsGroup,
      { name: "", link: "", type: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newAttachmentsGroup = [...attachmentsGroup];
    newAttachmentsGroup.splice(i, 1);
    setAttachmentsGroup(newAttachmentsGroup);
  };

  return (
    <ContainerTasks>
      <Typography className="subtitle" gutterBottom>
        Attachments
        <button
          className="buttonAdd"
          type="button"
          onClick={() => addFormFields()}
        >
          <AddCircleOutlineIcon className="addIcon" />
        </button>
      </Typography>
      <form>
        {attachmentsGroup.map((element, index) => (
          <>
            <Typography className="paragraph" gutterBottom>
              Attachment {index + 1}
              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeFormFields(index)}
                >
                  <RemoveCircleOutlineIcon className="removeIcon" />
                </button>
              ) : null}
            </Typography>

            <div className="form-inline" key={index}>
              <TextField
                id="attachmentName"
                label="attachment name"
                variant="standard"
                color="success"
                type="text"
                name="name"
                value={element.name || ""}
                onChange={(e) => handleChange(index, e)}
                fullWidth
              />
              <TextField
                id="attachmentLink"
                label="attachment link"
                variant="standard"
                color="success"
                type="text"
                name="link"
                value={element.link || ""}
                onChange={(e) => handleChange(index, e)}
                fullWidth
              />

              <FormControl fullWidth className="selectInputTasks">
                <InputLabel id="type">type</InputLabel>
                <Select
                  labelId="type"
                  id="type"
                  name="type"
                  value={element.type || ""}
                  label="type"
                  onChange={(e) => handleChange(index, e)}
                  color="success"
                  fullWidth
                >
                  <MenuItem value={"resume"}>resume</MenuItem>
                  <MenuItem value={"coverletter"}>cover letter</MenuItem>
                  <MenuItem value={"portifolio"}>portifolio</MenuItem>
                  <MenuItem value={"testAnswers"}>test answers</MenuItem>
                  <MenuItem value={"others"}>others</MenuItem>
                </Select>
              </FormControl>
            </div>
          </>
        ))}
      </form>
    </ContainerTasks>
  );
}
