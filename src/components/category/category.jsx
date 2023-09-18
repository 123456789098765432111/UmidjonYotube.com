import { Stack } from '@mui/material'
import { category } from '../../constants'
import { colors } from '../../constants/colors'

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
	return (
		<Stack  style={{width:"400px",overflowY:"auto",height:"100vh",margin:"0 auto",color:"#222"}}>
			{category.map(item => (
				<button
					key={item.name}
					className='category-btn'
					style={{
						borderRadius: '20px',
						padding:"20px",
						background: item.name === selectedCategory && colors.secondary,
						color: item.name === selectedCategory && '#fff',
					}}
					onClick={() => selectedCategoryHandler(item.name)}
				>
					<span
						style={{
							color: item.name === selectedCategory ? '#fff' : "#222",
							marginRight: '15px',
						}}
					>
						{item.icon}
					</span>
					<span style={{ opacity: '1' }}>{item.name}</span>
				</button>
			))}
		</Stack>
	)
}

export default Category
