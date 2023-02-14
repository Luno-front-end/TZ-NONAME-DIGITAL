import TextField from "@mui/material/TextField";

export const Input = ({ label, classIn, type, value, setValue }) => {
  return (
    <TextField
      id="filled-basic"
      label={label}
      variant="filled"
      className={classIn}
      type={type}
      value={value}
      required
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
