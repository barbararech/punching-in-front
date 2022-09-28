import { Container, Form } from "./styles";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createUser } from "../../services/api";
import { signUpSchema } from "../../schemas/index";

export default function SignUpForm() {
  const [enable, setEnable] = useState(true);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setEnable(false);

    try {
      await createUser(values);
      navigate("/");
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        alert("Email already registered!");
      } else {
        alert(error);
      }
      setEnable(true);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        username: "",
      },
      validationSchema: signUpSchema,
      onSubmit,
    });
  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off" enable={enable}>
        <p> Create an account!</p>

        <label htmlFor="username" className="form__label">
          Username
        </label>
        <input
          value={values.username}
          onChange={handleChange}
          id="username"
          onBlur={handleBlur}
          name="username"
          type="username"
          placeholder="username"
          className={
            errors.username && touched.username
              ? " form__field input-error"
              : "form__field"
          }
        />
        {errors.username && touched.username && (
          <p className="error">{errors.username}</p>
        )}

        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          onBlur={handleBlur}
          name="email"
          type="email"
          placeholder="e-mail"
          className={
            errors.email && touched.email
              ? " form__field input-error"
              : "form__field"
          }
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label htmlFor="password" className="form__label">
          Password
        </label>
        <input
          value={values.password}
          onChange={handleChange}
          id="password"
          onBlur={handleBlur}
          name="password"
          type="password"
          placeholder="password"
          className={
            errors.password && touched.password
              ? " form__field input-error"
              : "form__field"
          }
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}

        <div className="submitButton">
          <button type="submit">Sign Up</button>
        </div>

        <Link to="/">
          <h6>Switch back to log in</h6>
        </Link>
      </Form>
    </Container>
  );
}
