import React, { useState } from "react";

const PaymentForm = () => {
    const [method, setMethod] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order Placed Successfully!");
    };

    return (
        <form className="col" onSubmit={handleSubmit} style={{ flex: 1 }}>
            <h2 className="fs-4">Payment Method</h2>
            <div className="form-check form-check form-check-inline">
                <input className="form-check-input" type="radio" id="card" value="card" checked={method === 'card'}
                    onClick={(e) => setMethod(e.target.value)} />
                <label className="form-check-label" htmlFor="card">
                    Credit / Debit Card
                </label>
            </div>
            <div className="form-check form-check form-check-inline">
                <input className="form-check-input" type="radio" id="card" value="upi" checked={method === 'upi'}
                    onClick={(e) => setMethod(e.target.value)} />
                <label className="form-check-label" htmlFor="card">
                    UPI
                </label>
            </div>
            <div className="form-check form-check form-check-inline">
                <input className="form-check-input" type="radio" id="card" value="cod" checked={method === 'cod'}
                    onClick={(e) => setMethod(e.target.value)} />
                <label className="form-check-label" htmlFor="card">
                    Cash on Delivery
                </label>
            </div>
            <div className="m-2">
                {method === "card" ? (
                    <>
                        <h2 className="fs-4">Billing Details</h2>
                        <h3  className="fs-6">Card Details</h3>
                        <input type="text" className="form-control" placeholder="Card Number" required /><br />
                        <input type="text" className="form-control" placeholder="Expiry Date" required /><br />
                        <input type="text" className="form-control" placeholder="CVV" required /><br />
                    </>
                ) : method === "upi" ? (
                    <>
                        <h2 className="fs-4">Billing Details</h2>
                        <h3 className="fs-6">UPI ID</h3>
                        <input type="text" className="form-control" placeholder="yourupi@bank" required /><br />
                    </>
                ) : null}
            </div>
        </form>
    );
};

export default PaymentForm;