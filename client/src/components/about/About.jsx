
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const boxstyle={
    background:'url("https://4kwallpapers.com/images/wallpapers/outrun-neon-dark-background-purple-1920x1080-4523.jpg")'
}
const Banner = styled(Box)`
    background-image: url(https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #fff;
`;

const About = () => {

    return (
        <Box style={boxstyle}>
            <Banner/>
            <Wrapper>
                <Typography variant="h3" style={{color:'white'}}>Anthology</Typography>
                <Text variant="h5">We live in an era where content is overflowing in the ever growing internet. Contents can mean anything.
Ranging from blogs to news updates and from poetries to stories. In that wide range of contents, the
contents which irk the minds of most internet users are poetries and stories. Stories and novels takes the
person out of reality and lets them venture into the vast and boundless world of imagination made and
designed just for them, while poetries can touch the person’s heart and make the person understand the
beauty mere words hold. Words are stronger than weapon they say. But to access these books people need
to go to libraries and book shops. The process of obtaining the book is cumbersome and tiring. If people
go for online e-books, they often spend lots of money on renting these books . It is often inconvenient for
the users to travel and get books. There is also no proper platform which brings these contents for free.
Most websites asks the user to pay for certain collection of novels. Moreover the websites are complex
and not user friendly. They are heavy applications which require lot of space.
                    
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me: 
                        <Link href="mailto:snehaksj@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;