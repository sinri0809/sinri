const Button = ({label="default", className=""}) => {
  return <button className={`btn ${className}`}>
    {label}
  </button>
};

export default Button;