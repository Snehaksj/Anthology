
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
    background: "url('https://img.freepik.com/free-photo/futuristic-background-with-colorful-glowing-abstract-neon-lights_181624-26329.jpg?w=1060&t=st=1682091473~exp=1682092073~hmac=4b7dadd5a3bc3eb026113acf2992d4e91d6b26afe1fbd52bf9ac473341aa8d3a)",
    backgroundSize:'cover',
    width:'1400px',
    height:'400px',
    marginTop:'60px',
}
const textHeadingStyle = {
    color:'white',
    position:'absolute',
    marginTop:'120px',
    marginLeft:'460px',
    fontSize:'80px',
    fontFamily:'sans-serif'
}
const textHeadingStyle2 = {
    color:'white',
    position:'absolute',
    marginTop:'220px',
    marginLeft:'380px',
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