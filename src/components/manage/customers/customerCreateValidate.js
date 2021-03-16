export const customerCreateValidate = (values) => {
  const errors = {};

  !values.name && (errors.name = "Name is required");
  !values.email && (errors.email = "Email is required");
  /* !values.phone && (errors.phone = "Phone is required");
  !values.fax && (errors.fax = "Fax is required");
  !values.address && (errors.address = "Address is required");
  !values.city && (errors.city = "City is required");
  !values.state && (errors.state = "State is required");
  !values.country && (errors.country = "Country is required");
  !values.dot && (errors.dot = "DOT is required");
  !values.zip && (errors.zip = "Zip is required"); */

  return errors;
};
