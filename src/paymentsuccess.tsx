import checkmark from "./assets/check_circle.svg";
import { useNavigate } from "react-router-dom";

const paymentsuccess = () => {
  // Use navigate from react-router-dom to handle navigation
  const navigate = useNavigate();
  return (
    <div className="payment_contaner">
      <img src={checkmark} alt="check" />
      <h1> Success!.</h1>
      <h2>Thank you for purchasing!</h2>
      <button onClick={() => navigate("/")}>Return Home</button>
    </div>
  );
};

export default paymentsuccess;
