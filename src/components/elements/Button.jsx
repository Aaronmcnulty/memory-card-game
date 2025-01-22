
function Button({ text, handleClick, role }) {
  return <button role={role} onClick={handleClick}>{text}</button>;
}

export default Button;
