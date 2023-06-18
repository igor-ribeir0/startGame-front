import { Button, Header, Main, Form } from '../assets/styles';
import React from "react";
import { AuthContext } from "../providers/auth";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function PurchaseGame() {
    const { gamePrice } = React.useContext(AuthContext);
    const { gameName } = React.useContext(AuthContext);
    const { userId } = React.useContext(AuthContext);
    const { token } = React.useContext(AuthContext);
    const navigate = useNavigate();

    async function ConfirmPurchase(e) {
        e.preventDefault()

        try {
            const url = `http://localhost:5000/purchase`;
            const data = { userId, gameName, price: gamePrice };

            axios.post(url, data, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(() => navigate('/paymentConfirm'))

        } catch (error) {
            alert(error.response.data)
        }
    };

    return (
        <Main>
            <Header>
                <h2>Payment</h2>
            </Header>
            <h3>Credit Card</h3>
            <Form onSubmit={ConfirmPurchase}>
                <label>
                    <p>Card Number</p>
                    <input type="text" inputMode="numeric" minLength={16} maxLength={16} required />
                </label>
                <div>
                    <label>
                        <p>Card Expiring Date</p>
                        <input type="text" minLength={5} maxLength={5} required /> 
                    </label>
                    <label>
                        <p>CVV</p>
                        <input type="text" inputMode="numeric" minLength={3} maxLength={3} required />
                    </label>
                </div>
                <label>
                    <p>Cardholder</p>
                    <input type="text" required />
                </label>
                <label>
                    <p>Holder's CPF</p>
                    <input type="text" inputMode="numeric" minLength={11} maxLength={11} required />
                </label>
                <Button type="submit">Confirm</Button>
            </Form>
        </Main>
    )
}

export default PurchaseGame;