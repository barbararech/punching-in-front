import { Container, Form } from "../SignUpForm/styles";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignInForm() {
  return (
    <Container>
      <Form>
        <p> Login</p>
        <label for="email" class="form__label">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="e-mail"
          className="form__field"
        />
        <label for="password" class="form__label">
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="password"
          className="form__field"
        />
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
