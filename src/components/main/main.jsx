import { useState, useEffect } from 'react'
import { colors } from '../../constants/colors'
import { Box, Container, Stack, Typography } from '@mui/material'
import { Category, Videos } from '../'
import { ApiService } from '../../service/api.service'

const Main = () => {
	const [selectedCategory, setSelectedCategory] = useState('New')
	const [videos, setVideos] = useState([])

	const selectedCategoryHandler = category => setSelectedCategory(category)

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
				setVideos(data.items)
			} catch (error) {
				console.log(error)
			}
		}

		getData()
	}, [selectedCategory])

	return (
		<Stack direction={'row'}>
			<Category
				selectedCategoryHandler={selectedCategoryHandler}
				selectedCategory={selectedCategory}
			/>
			<Box p={2} sx={{ height: '100vh' ,width:'1500px',overflowY:"auto"}}  style={{margin:"0 auto"}} >
				<Container >
					<Typography variant={'h4'} fontWeight={'bold'} mb={2}>
				<span style={{color:"#222"}}>{selectedCategory}</span>	  <span style={{ color: colors.secondary }}> videos</span>
					</Typography>
					<Videos videos={videos} />
				</Container>
			</Box>
		</Stack>
	)
}

export default Main
