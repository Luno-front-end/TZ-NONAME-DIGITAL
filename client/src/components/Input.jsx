import TextField from "@mui/material/TextField";

export const Input = (props) => {
  return (
    <TextField
      id="filled-basic"
      label={props.label}
      variant="filled"
      className={props.class}
      type={props.type}
      value={props.value}
      required
      onChange={(e) => props.setValue(e.target.value)}
    />
  );
};
