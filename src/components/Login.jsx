import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

export const Login = () => {
  const [viewPassword, SetViewPassword] = useState(false);

  const validations = {
    email: Yup.string().required("Campo requerido").email('Ingrese un email válido'),
    password: Yup.string().min(6,"La contraseña debe contar con más de 6 caracteres").required("Campo requerido"),
  };

  const { handleSubmit, isSubmitting, errors, touched, getFieldProps } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object(validations),
      onSubmit: async () => {
        console.log("submitted");
      },
    });

  const viewtInputPassword = () => {
    SetViewPassword(!viewPassword);
  };

  useEffect(() => {
    document.title = "SignIn";
  }, []);

  return (
    <div className="Login">
      <div className="Login-logo">
        <div className="Wrapper">
          <Link to="/" title="Casa Blanca">
            <img
              src="/assets/img/logos/2-preview.png"
              alt="Logo"
              loading="lazy"
              style={{ width: "250px", height: "100px" }}
            />
          </Link>
        </div>
      </div>

      <div className="Login-content">
        <div className="Login-content_auth">
          <form className="Login-content_auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                {...getFieldProps("email")}
                name="email"
                autoFocus
                type="email"
                placeholder="Ingresa tu email"
              />
              {touched.email && errors.email && (
                <span
                  style={{ color: "red", fontSize: "14px" }}
                  className="span-error"
                >
                  {errors.email}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type={`${viewPassword ? "text" : "password"}`}
                placeholder="Contraseña"
                name="password"
                {...getFieldProps("password")}
              />
              {touched.password && errors.password && (
                <span
                  style={{ color: "red", fontSize: "14px" }}
                  className="span-error"
                >
                  {errors.password}
                </span>
              )}
              <button onClick={viewtInputPassword} type="button">
                {viewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
            <div className="form-button">
              <button type="submit">
                {isSubmitting ? "Iniciando sesión..." : "Ingresar"}
              </button>
            </div>
          </form>

          <div className="Login-content_auth-recovery">
            <Link to="/" title="¿Olvidaste tu contraseña?">
              ¿Olvidaste tu contraseña?
            </Link>
            <Link
              to="/account/register"
              title="¿Aún no tienes una cuenta?. Regístrate"
            >
              ¿Aún no tienes una cuenta?. Regístrate
            </Link>
          </div>
        </div>

        <div className="Login-content_banner">
          <img src="/assets/img/banner/img-signinjpg.jpg" />
        </div>
      </div>
    </div>
  );
};
