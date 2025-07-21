import React, { useState } from "react";
import './Signup.css';

function Signup() {
  const [payment, setPayment] = useState("");
  const goBack = () => window.history.back();
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="number" placeholder="Age" min="1" max="120" required />
        <input type="tel" placeholder="Phone Number" pattern="[0-9]{10}" required />
        <select required value={payment} onChange={e => setPayment(e.target.value)}>
          <option value="" disabled>Payment Option</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="upi">UPI</option>
          <option value="netbanking">Net Banking</option>
        </select>
        {/* Payment method specific fields */}
        {payment === "credit" && (
          <div style={{ marginTop: 8 }}>
            <input type="text" placeholder="Credit Card Number" maxLength={16} required />
            <input type="text" placeholder="Name on Card" required />
            <input type="text" placeholder="Expiry (MM/YY)" required />
            <input type="text" placeholder="CVV" maxLength={4} required />
          </div>
        )}
        {payment === "debit" && (
          <div style={{ marginTop: 8 }}>
            <input type="text" placeholder="Debit Card Number" maxLength={16} required />
            <input type="text" placeholder="Name on Card" required />
            <input type="text" placeholder="Expiry (MM/YY)" required />
            <input type="text" placeholder="CVV" maxLength={4} required />
          </div>
        )}
        {payment === "upi" && (
          <div style={{ marginTop: 8 }}>
            <input type="text" placeholder="UPI ID" required />
          </div>
        )}
        {payment === "netbanking" && (
          <div style={{ marginTop: 8 }}>
            <input type="text" placeholder="Bank Name" required />
            <input type="text" placeholder="Account Number" required />
            <input type="text" placeholder="IFSC Code" required />
          </div>
        )}
        <input type="email" placeholder="Email ID" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p style={{ marginTop: 16 }}>
        Already have an account? <a href="/login">Login</a>
      </p>
      <button onClick={goBack} style={{ marginTop: 24, padding: "8px 16px", fontSize: "1rem", background: "#b30000", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        &larr; Back
      </button>
    </div>
  );
}

export default Signup;
