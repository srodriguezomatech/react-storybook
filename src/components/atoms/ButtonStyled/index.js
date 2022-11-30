import "./styles.css";

const ButtonStyled = ({
  variant = "secondary",
  label = "Lorem Ipsum",
  size = "medium",
}) => {
  return (
    <button className={`custom-button ${variant} ${size}`}>{label}</button>
  );
};
export default ButtonStyled;
