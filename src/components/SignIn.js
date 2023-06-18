import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import axios from 'axios';
import { AuthContext } from '../providers/auth';
import { Main2, Title, Button, LinkTexto, Form } from '../assets/styles';
import logo from '../assets/imgs/logo.jpg';

function SignIn() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { setToken } = React.useContext(AuthContext);
    const { setUserId } = React.useContext(AuthContext);
    const [ load, setLoad ] = useState(false);
    const navigate = useNavigate();

    async function signIn(e) {
        e.preventDefault()
        try {
            setLoad(true)
            await axios.post(`http://localhost:5000/users/sign-in`, {
                email,
                password
            })

            .then(res => setToken({ token: res.data.token }))
            .then(res => setUserId({ userId: res.data.user }))
            .then(() => navigate('/home'))

        } catch (error) {
            alert(error.message);
            setLoad(false);
        }
    };

    return (
        <Main2>
            <Title src={logo} alt="logo"/>
            <Form onSubmit={signIn} gap="15px">
                <input
                    required
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}
                />
                <div>
                    <input
                        required
                        type="password"
                        placeholder="Password"
                        name="password"
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit" margin="25px">
                    {!load ? 
                    <div>PLAY</div> 
                    : 
                    <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="30"
                        visible={true}
                    />  
                    }
                </Button>
            </Form>
            <LinkTexto>Don't have an account? <Link to={"/register"}>Create an account</Link></LinkTexto>
        </Main2>
    )
};

export default SignIn;
