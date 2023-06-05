import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import axios from 'axios';
import logo from '../assets/imgs/logo.jpg';
import { Main2, Title, Button, LinkTexto, Form } from '../assets/styles';

function SignUp(){
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ load, setLoad ] = useState(false)
    const navigate = useNavigate();

    async function signUp(e) {
        e.preventDefault()

        try {
            setLoad(true)
            await axios.post(`http://localhost:5000/users/sign-up`, {
                name,
                email,
                password
            })
            .then(() => navigate('/'))
        } catch (error) {
            alert(error.response.data)
            setLoad(false)
        }
    };

    return (
        <Main2>
            <Title src={logo} alt="logo"/>
            <Form onSubmit={signUp} gap="15px">
                <input
                    required
                    type="text"
                    placeholder="Name"
                    name="name"
                    value = {name}
                    onChange = {e => setName(e.target.value)}
                />
                <input
                    required
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}
                />
                <input
                    required
                    type="password"
                    placeholder="Password"
                    name="password"
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}
                />
                
                <Button type="submit" margin="25px">
                    {!load ? 
                    <div>Register</div> 
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
            <LinkTexto>Already have an account? <Link to={"/"}>Login</Link></LinkTexto>
        </Main2>
    )
}

export default SignUp;