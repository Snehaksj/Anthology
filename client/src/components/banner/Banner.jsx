
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;
const bannerImageStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1589497836818-9ad2fa1df1a0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzYwOTV8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '400px',
    marginTop: '60px',
    position: 'relative',
};
const textHeadingStyle = {
    color:'white',
    position:'absolute',
    marginTop:'120px',
    marginLeft:'500px',
    fontSize:'80px',
    fontFamily:'sans-serif'
}
const textHeadingStyle2 = {
    color:'white',
    position:'absolute',
    marginTop:'220px',
    marginLeft:'400px',
    fontSize:'40px',
    fontFamily:'sans-serif'
}
const Banner = () => {
    
    return (
        <Box style={bannerImageStyle}>
            <p style={textHeadingStyle}>ANTHOLOGY</p>
            <p style={textHeadingStyle2}>Your One Stop Destination For Stories</p>
        </Box>
    )
}

export default Banner;