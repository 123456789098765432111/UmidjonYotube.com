import { Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { colors } from '../../constants/colors'
import { Searchbar } from '../'
import 'rodal/lib/rodal.css';
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
	
	return (
		<Stack
			direction={'row'}
			alignItems={'center'}
			justifyContent={'space-between'}
			p={2}
			sx={{ position: 'sticky', top: 0, zIndex: 999, background: colors.primary }}
		>
			<Link to={'/'}>
				<h1 style={{fontFamily:"sans-serif",fontSize:"30px",fontWeight:"initial"}}>
					Umidjon
				</h1>
			</Link>
			<Searchbar />
			<Box>
				
			</Box>
			
		</Stack>
	)
}

export default Navbar
