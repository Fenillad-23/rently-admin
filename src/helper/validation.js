export const validateLogin = (formData) => {
  const errors = {};
  if (!formData.username.trim()) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
    errors.username = "Username must be a valid email address";
  }

  if (!formData.password.trim()) {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password should be least 6 characters";
  }
  return errors;
};
