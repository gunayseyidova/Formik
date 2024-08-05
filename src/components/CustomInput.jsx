import { TextField } from "@mui/material";
import { useField } from "formik";

const CustomInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  console.log("filed", field);
  console.log("meta", meta);
  return (
    <>
      <TextField {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default CustomInput;
