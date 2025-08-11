import { useNavigate } from "react-router-dom";
import "../styles/components/BackButton.css";

function BackButton({ to = "/", label = "← Volver" }) {
  const navigate = useNavigate();

  return (
    <button type="button" className="back-button" onClick={() => navigate(to)}>
      {label}
    </button>
  );
}

export default BackButton;
