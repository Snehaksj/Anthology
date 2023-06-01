
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
const appBarStyle = {
    background: 'white',
}
const toolBarStyle = {
    justifyContent: 'right',
 }
 const itemStyle = {
     marginRight:'20px',
     color:'black',
     textDecoration:'none'
 }
 const imgStyle={
     width:'180px',
     height:'55px',
     marginLeft:'10px',
     position:'absolute'
 }
// const Component = styled(AppBar)`
//     background: #FFFFFF;
//     color: black;
// `;

// const Container = styled(Toolbar)`
//     justify-content: center;
//     & > a {
//         padding: 20px;
//         color: #000;
//         text-decoration: none;
//     }
// `

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <AppBar style={appBarStyle}>
            <img src='../../../logo.png' style={imgStyle}/>
            <Toolbar style ={toolBarStyle}>
                <Link to='/' style={itemStyle}>HOME</Link>
                <Link to='/about' style={itemStyle}>ABOUT</Link>
                <Link to='/contact' style={itemStyle}>CONTACT</Link>
                <Link to='/account' style={itemStyle}>LOGOUT</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;