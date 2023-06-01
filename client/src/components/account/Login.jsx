import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    background-color:white;
    width: 400px;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;


const Wrapper = styled(Box)`
    // padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

// const LoginButton = styled(Button)`
//     text-transform: none;
//     background: #FB641B;
//     color: #fff;
//     height: 48px;
//     border-radius: 2px;
// `;

// const SignupButton = styled(Button)`
//     text-transform: none;
//     background: #fff;
//     color: #2874f0;
//     height: 48px;
//     border-radius: 2px;
//     box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
// `;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const backgroundStyle = {
    background: 'linear-gradient(to right, rgb(248, 126, 126) -0.5%, rgb(251, 206, 143) 35.3%, rgb(184, 252, 233) 67.2%, rgb(118, 162, 229) 92.3%)',
    height:'111.7vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    }
    const loginStyle={ fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif'",
    fontSize:'40px'
    };
    const boxStyle={background:'rgba(255, 255, 255, 0.923)',
    width:'350px',
    height:'480px',
    textAlign: 'center',
    top:'50%',
    left:'50%',
    position:'absolute',
    transform:'translate(-50%,-50%)',
    boxSizing: 'borderbox',
    borderRadius: '3mm',
    padding:'20px 35px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
    };
    const boxStyle2 = {
        display:'flex',
        flexDirection:'column',
        flex:'1'
    };
    const textStyle={
        
        marginBottom:'20px'
    };
    const orStyle={
        color:'#878787',
        fontSize:'14px'
    };
    const loginButtonStyle={
        marginTop:'10px',
        marginBottom:'20px'
    };
    const SignUpButtonStyle ={
        boxShadow:'0 2px 4px 0 rgba(0,0,0,0.2)',
        marginTop:'10px',
    };
    return (
        <body style={backgroundStyle}>
        <Component>
            <Box style={boxStyle}>
                {
                    account === 'login' ?
                    <>
                    <p style={loginStyle}>Login</p>
                        <Box style={boxStyle2}>
                            
                            <TextField variant="standard" value={login.username}  style={textStyle} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField  variant="standard" type="password" value={login.password}  style={textStyle} onChange={(e) => onValueChange(e)} name='password' label='Enter Password'/>

                            {error && <Error>{error}</Error>}

                            <Button variant="contained" style={loginButtonStyle} onClick={() => loginUser()} >Login</Button>
                            <Text style={orStyle}>OR</Text>
                            <Button onClick={() => toggleSignup()} style={SignUpButtonStyle}>Create an account</Button>
                        </Box> 
                        </>
                        :
                        <>
                        <p style={loginStyle}>Sign Up</p>
                        <Box style={boxStyle2}>
                            <TextField variant="standard" style={textStyle} onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" style={textStyle} onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" type="password" style={textStyle} onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />

                            <Button variant="contained" style={loginButtonStyle} onClick={() => signupUser()} >Signup</Button>
                            <Text style={orStyle}>OR</Text>
                            <Button  style={SignUpButtonStyle} onClick={() => toggleSignup()}>Already have an account</Button>
                        </Box>
                        </>
                }
            </Box>
        </Component>
        </body>
    )
}

export default Login;