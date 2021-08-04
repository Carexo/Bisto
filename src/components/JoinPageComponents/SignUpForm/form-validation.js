export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be longer than 6 characters";
  }

  if (values.repeatPassword && !(values.password === values.repeatPassword)) {
    errors.repeatPassword = "Password must be the same";
  }

  return errors;
};
