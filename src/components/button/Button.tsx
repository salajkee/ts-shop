import './style.scss';

interface ButtonProps {
  className: string;
  text: string;
  onClick?: () => void;
}

const Button = ({ className, text, onClick }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
