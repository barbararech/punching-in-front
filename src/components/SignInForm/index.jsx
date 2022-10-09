import { Container, Form } from "../SignUpForm/styles";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInUser } from "../../services/api";
import { signInSchema } from "../../schemas/index";
import { HandlerContext } from "../../contexts/contextHandler";

export default function SignInForm() {
  const { userData, setUserData } = useContext(HandlerContext);
  const [enable, setEnable] = useState(true);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setEnable(false);

    try {
      const promise = await signInUser(values);
      setUserData(promise);

      navigate("/home");
    } catch (error) {
      console.log(error)
      alert(error.response.data);
      setEnable(true);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signInSchema,
      onSubmit,
    });
  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off" enable={enable}>
        <p>Login</p>

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
          <button type="submit">Sign In</button>
        </div>

        <Link to="/signup">
          <h6>First time? Create an account!</h6>
        </Link>
      </Form>
    </Container>
  );
}
