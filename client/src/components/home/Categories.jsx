
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';

// const StyledTable = styled(Table)`
//     border: 1px solid rgba(224, 224, 224, 1);
// `;
    
const StyledButton = styled(Button)`
    margin: 20px;
    width: 90%;
    background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    color: #fff;
    text-decoration: none;
`;
    
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

`;
const buttonStyle={
    marginTop:'20px',
    marginLeft:'10px',
    background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    width:'90%',
    marginBottom:'5px'
}
const divstyle={
    background:"url('https://img.freepik.com/free-vector/gradient-dark-dynamic-lines-background_23-2148995950.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700265600&semt=ais')",
}
const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
        <div style={divstyle}>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <Button style={buttonStyle} variant="contained">Write story</Button>
            </Link>
            
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                                All Genres
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
        </>
    )
}

export default Categories;