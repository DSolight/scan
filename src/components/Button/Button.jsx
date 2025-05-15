import './Button.css';

export default function Button({ text, className = '' }) {
  return (
    <button className={`button ${className}`}>
      {text}
    </button>
  );
}
