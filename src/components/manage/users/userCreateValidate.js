export const userCreateValidate = (values) => {
  const errors = {};
  !values.firstName && (errors.firstName = "First Name is required");
  !values.lastName && (errors.lastName = "Last Name is required");
  !values.username && (errors.username = "Username is required");
  !values.phone && (errors.phone = "Phone is required");
  !values.location && (errors.location = "Location is required");
  !values.position && (errors.position = "Position is required");
  !values.roles && (errors.roles = "Role is required");
  !values.baseSalary && (errors.baseSalary = "Salary is required");
  !values.email && (errors.email = "Email is required");
  !values.password && (errors.password = "Password is required");

  return errors;
};
