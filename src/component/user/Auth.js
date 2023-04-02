import React from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

export function Auth() {


  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
 
    errors.root = {
      message: "Your user email or password is incorrect",
      type: "Login Failed",
    };

    reset();
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && (
        <small className="p-error">
          {errors[name].type + ": " + errors[name].message}
        </small>
      )
    );
  };

  return (
    <div className="card flex justify-content-center">
      <div className="card">
        <h5 className="text-center">Sign in to SLP</h5>
        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
          <div className="field">
            <span className="p-float-label p-input-icon-right">
              <i className="pi pi-envelope" />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address. E.g. example@email.com",
                  },
                }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.name}
                    {...field}
                    className={classNames({ "p-invalid": fieldState.invalid })}
                  />
                )}
              />
              <label
                htmlFor="email"
                className={classNames({ "p-error": !!errors.email })}
              >
                Email*
              </label>
            </span>
            {getFormErrorMessage("email")}
          </div>
          <div className="field">
            <span className="p-float-label">
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required." }}
                render={({ field, fieldState }) => (
                  <Password
                    id={field.name}
                    {...field}
                    
                    className={classNames({ "p-invalid": fieldState.invalid })}
                    />
                )}
              />
              <label
                htmlFor="password"
                className={classNames({ "p-error": errors.password })}
              >
                Password*
              </label>
            </span>
            {getFormErrorMessage("password")}
          </div>
          <Button type="submit" label="Submit" className="mt-2" />
        </form>
       
        <p>Not a memeber yet? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}
