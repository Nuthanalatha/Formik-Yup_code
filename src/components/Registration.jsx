import { useFormik } from "formik";
import React from "react";
import { signUpSchema } from "../schemas/object/Schema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Registration = () => {
  const { values, errors, handleChange, handleSumbit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });
  console.log(errors);
  return (
    <div>
      Registration
      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name ? <p style={{ color: "red" }}>{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
          />
          {errors.email ? <p style={{ color: "red" }}>{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            autoComplete="off"
            onChange={handleChange}
          />
          {errors.confirmPassword ? (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          ) : (
            ""
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
