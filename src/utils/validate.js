export const checkValidData = (email, password, name, isSignInForm) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  const isNameValid =
    isSignInForm || /^[A-Za-z ]{2,}$/.test(name?.trim() ?? "");

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
