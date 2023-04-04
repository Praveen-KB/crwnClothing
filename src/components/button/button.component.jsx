import "./button.styles.scss";

const BtnTypes = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BtnTypes[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
