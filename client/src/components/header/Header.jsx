
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
const appBarStyle = {
    background: 'black',
}
const toolBarStyle = {
    justifyContent: 'right',
 }
 const itemStyle = {
     marginRight:'30px',
     fontSize:'17px',
     color:'white',
     textDecoration:'none'
 }
 const itemStyle1 = {
    marginRight:'30px',
    fontSize:'16px',
    background:'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    borderRadius:'14px',
    padding:'7px',
    color:'white',
    textDecoration:'none'
}
 const imgStyle={
    fontFamily: 'Poppins',
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
            {/* <img src='../../../logo.png' style={imgStyle}/> */}
            <Toolbar style ={toolBarStyle}>
                <Link to='/' style={itemStyle}>Home</Link>
                <Link to='/about' style={itemStyle}>About</Link>
                <Link to='/contact' style={itemStyle}>Contact</Link>
                <Link to='/account' style={itemStyle1}>Logout</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;