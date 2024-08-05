import { useState } from "react";
import { Formik } from "formik";
import "./App.css";
import { basicSchema } from "./schemas/ValidationSchema";
import CustomInput from "./components/CustomInput";
import { Button } from "@mui/material";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <h1>Sing up</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={basicSchema}
        onSubmit={(values) => {
          console.log(values);
          setData((prev) => [...prev, values]);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div>
              <CustomInput
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                style={{ marginRight: "50px" }}
                id="demo-helper-text-misaligned"
                label="First name"
                type="text"
                name="firstName"
              />
              <CustomInput
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                id="demo-helper-text-misaligned"
                label="Last name"
                type="text"
                name="lastName"
              />
            </div>
            <div className="input">
              <CustomInput
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                style={{ width: "500px" }}
                id="demo-helper-text-misaligned"
                label="Email"
                type="email"
                name="email"
              />
            </div>
            <div className="input">
              <CustomInput
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                style={{ width: "500px" }}
                id="demo-helper-text-misaligned"
                label="Password"
                type="password"
                name="password"
              />
            </div>

            <Button
              variant="contained"
              disableElevation
              type="submit"
              style={{ width: "500px" }}
            >
              Sign up
            </Button>
          </form>
        )}
      </Formik>
      {data && (
        <div className="card">
          {data.map((item, index) => (
            <div key={index} className="container">
              <p>First Name:{item.firstName}</p>
              <p>Last Name:{item.lastName}</p>
              <p>Email:{item.email}</p>
              <p>Password:{item.password}</p>
            </div>
          ))}
          {""}
        </div>
      )}
    </>
  );
}

export default App;
