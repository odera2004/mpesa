import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const payHandler = (event) => {
    event.preventDefault();
    Axios.post("https://mpesa-1.onrender.com/token", {
      amount,
      phone,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h1 className="mb-4 text-center">
          Pay with <span className="text-success fw-bold">Mpesa</span>
        </h1>
        <form onSubmit={payHandler}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              className="form-control text-center"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
              className="form-control text-center"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
