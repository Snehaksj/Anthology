
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg);
    width: 100%;
    height: 50vh;
    color:white;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: white;
`;

const bgstyle={
    background: 'url("https://wallpapers.com/images/featured/grey-5xvepms9fbbi0bmh.jpg")',
    height:'100vh',
    backgroundPosition: 'left 0px top -100px',
    backgroundSize: 'cover'
};
const Contact = () => {
    return (
        <Box style={bgstyle}>
            <Banner />
            <Wrapper>
                <Typography variant="h3" style={{color:'white'}}>Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me :  
                    <Link href="mailto:snehaksj@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;