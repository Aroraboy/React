import React, {useState} from 'react';

function Event() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);  
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("Credit Card");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }  
    function handleCommentChange(event) {
        setComment(event.target.value);
    } 
    function handlePaymentChange(event) {
        setPayment(event.target.value);
    } 
    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange}
            placeholder="Enter deliveryy instructions"/>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bitcoin">Bitcoin</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                       checked={shipping === "Pick Up"}
                       onChange={handleShippingChange}/>
                Pick up
            </label>
            <label>
                <input type="radio" value="Delivery"
                       checked={shipping === "Delivery"}
                       onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping Method: {shipping}</p>
        </div>
        
    )
}
export default Event;