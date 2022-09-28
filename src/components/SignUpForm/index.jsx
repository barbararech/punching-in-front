// import React from "react";
// import { useFormik } from "formik";
// import { Container } from "./styles";

// export default function SignUpForm() {
//   const [enable, setEnable] = useState(true);
//   const navigate = useNavigate();

//   const onSubmit = (values, actions) => {
//     setEnable(false);

//     axios({
//       method: "POST",
//       url: `${API}/signup`,
//       data: values,
//     })
//       .then((response) => {
//         navigate("/");
//         console.log(response.data);
//       })
//       .catch((error) => {
//         if (error.code === "ERR_BAD_REQUEST") {
//           alert("Email already registered!");
//         } else {
//           alert(error);
//         }
//         setEnable(true);
//       });
//   };

//   const {
//     values,
//     errors,
//     touched,
//     isSubmitting,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       username: "",
//       pictureUrl: "",
//     },
//     validationSchema: basicSchema,
//     onSubmit,
//   });

//   return (
//     <Container enable={enable}>
//       <div className="split">
//         <div className="form">
//           <form onSubmit={handleSubmit} autoComplete="off">
//             {/* <label htmlFor="email">Email</label> */}
//             <input
//               value={values.email}
//               onChange={handleChange}
//               id="email"
//               type="email"
//               placeholder="e-mail"
//               onBlur={handleBlur}
//               className={errors.email && touched.email ? "input-error" : ""}
//             />
//             {errors.email && touched.email && (
//               <p className="error">{errors.email}</p>
//             )}

//             {/* <label htmlFor="password">Password</label> */}
//             <input
//               id="password"
//               type="password"
//               placeholder="password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={
//                 errors.password && touched.password ? "input-error" : ""
//               }
//             />
//             {errors.password && touched.password && (
//               <p className="error">{errors.password}</p>
//             )}

//             {/* <label htmlFor="name">Username</label> */}
//             <input
//               id="username"
//               type="text"
//               placeholder="username"
//               value={values.username}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={
//                 errors.username && touched.username ? "input-error" : ""
//               }
//             />
//             {errors.username && touched.username && (
//               <p className="error">{errors.username}</p>
//             )}

//             {/* <label htmlFor="name">Picture Url</label> */}
//             <input
//               id="pictureUrl"
//               type="text"
//               placeholder="picture url"
//               value={values.pictureUrl}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={
//                 errors.pictureUrl && touched.pictureUrl ? "input-error" : ""
//               }
//             />
//             {errors.pictureUrl && touched.pictureUrl && (
//               <p className="error">{errors.pictureUrl}</p>
//             )}

//             <button type="submit">Sign Up</button>
//             {/* <Link to="/">
//                 <h6>Switch back to log in</h6>
//               </Link> */}
//           </form>
//         </div>
//       </div>
//     </Container>
//   );
// }

import { Container, Form } from "./styles";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {
  return (
    <Container>
      <Form>
        <p> Create an account!</p>
        <label for="username" class="form__label">
          Username
        </label>
        <input
          name="username"
          type="username"
          placeholder="username"
          className="form__field"
        />
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
        <button type="submit">Sign Up</button>
        </div>
        <Link to="/">
          <h6>Switch back to log in</h6>
        </Link>
      </Form>
    </Container>
  );
}
