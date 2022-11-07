import "./styles.css";

const ButtonStyled = ({
  variant = "primary",
  title = "title",
  size = "medium",
}) => {
  return (
    <button className={`custom-button ${variant} ${size}`}>{title}</button>
  );
};
export default ButtonStyled;
