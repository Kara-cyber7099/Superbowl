import React from 'react';
import {useNavigate} from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Footer from '../components/footer/Footer';

export default function Index(){
	const navigate = useNavigate();

	return (
	<Box component="div" mb={0}>
		<Box component="div" sx={{ height: 'calc(100vh - 67px)' }}>
			<Box
			component="div"
			display="flex"
			justifyContent="center"
			alignItems="center"
			sx={{ 
				height: '100%', 
				background: 'url(https://images.unsplash.com/photo-1558258021-971dd2148be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhcHBlcnxlbnwwfHwwfHx8MA%3D%3D)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				bgcolor: '#0d0c0a', 
				color: 'white' 
			}}>
				<Box sx={{ maxWidth: 800, p:1 }}>
					<Typography
					variant="h3"
					align='center'
					sx={{ 
						fontWeight: 900, 
						textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' 
					}}>
						From Halftime to Hypermodal
					</Typography>
					<Typography 
					variant="h3" 
					gutterBottom
					align="center"
					sx={{ 
						fontWeight: 900, 
						textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' 
					}}>
						Kendrick Lamar at the Super Bowl.
					</Typography>
					<Typography 
					variant="h6"
					align="center" 
					sx={{ 
						fontWeight: 500, 
						textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' 
					}}>
						A multimedia exploration of performance, politics, and symbolism.
					</Typography>

					<Box
					component="div"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					gap={2}
					mt={2}>
						<Typography>
							Watch the Super Bowl Performance Clip.
						</Typography>
						<Button 
						variant="contained" 
						color="secondary"
						size="large"
						>
							Super Bowl performance video
						</Button>
					</Box>
					{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/KDorKy-13ak?si=YDCTrBxPyl2d5Vm9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> */}
					{/* </iframe> */}
				</Box>
			</Box>
		</Box>	
		
		<Box 
		component="div" 
		p={5} 
		sx={{ 
			bgcolor: '#f5f5f0', 
		}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={0}>
					<Grid size={{ xs: 12, sm:12, lg: 8 }}>
						<Typography 
						variant="h4" 
						fontWeight="bolder"
						gutterBottom>
							Overview
						</Typography>

						<Box>
							<Typography variant="body1">
								Welcome to this interactive website exploring Kendrick Lamar’s Super Bowl halftime
								performance. This site is designed to help you unpack the layers of meaning in the show —
								from stage design, choreography, and costumes, to lyrics, cultural symbols, and political
								commentary. Through videos, images, annotations, and interactive features, you’ll discover
								how a single performance combines music, visuals, and cultural critique into a hypermodal
								experience.
							</Typography>
						</Box>
					</Grid>
					<Grid size={{ xs: 12, sm: 12, lg: 4 }}>
						<img src="" alt="" />
					</Grid>
				</Grid>
				
			</Container>
		</Box>


		<Box component="div" p={5}>
			<Container maxWidth="lg">
				<Grid container spacing={3}>

					{/* page 2 */}
					<Grid size={{ xs: 12, sm: 12, lg: 4  }}>
						<Box
						component="div"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						sx={{ 
							boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
							borderRadius: 2,
							p: 2,
							transition: 'transform 0.3s ease, box-shadow 0.3s ease',
							'&:hover':{transform: 'scale(.7)'}
						}}>
							<Typography 
							variant="h6" 
							fontWeight="bold"
							align="center"
							gutterBottom>
								Red Button &amp; New Orleans (Opening the Portal)
							</Typography>
							<Button
							fullWidth
							color="primary"
							variant="contained">
								View Orleans
							</Button>
						</Box>
					</Grid>

					{/* page 3 */}
					<Grid size={{ xs: 12, sm: 12, lg: 4  }}>
						<Box
						component="div"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						sx={{ 
							boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
							borderRadius: 2,
							p: 2,
							transition: 'transform 0.3s ease, box-shadow 0.3s ease',
							'&:hover':{transform: 'scale(.7)'}
						}}>
							<Typography 
							variant="h6" 
							fontWeight="bold"
							align="center"
							gutterBottom>
								Stage &amp; Visual Design (The Great Game of America)
							</Typography>
							<Button
							fullWidth
							color="primary"
							variant="contained">
								See designs
							</Button>
						</Box>
					</Grid>

					{/* page 2 */}
					<Grid size={{ xs: 12, sm: 12, lg: 4 }}>
						<Box
						component="div"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						sx={{ 
							boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
							borderRadius: 2,
							p: 2,
							transition: 'transform 0.3s ease, box-shadow 0.3s ease',
							'&:hover':{transform: 'scale(.7)'}
						}}>
							<Typography 
							variant="h6" 
							fontWeight="bold"
							align="center"
							gutterBottom>
								Costumes &amp; Dancers (America Worn on the Body)
							</Typography>
							<Button
							fullWidth
							color="primary"
							variant="contained">
								View Customes ...
							</Button>
						</Box>
					</Grid>

					{/* page 2 */}
					<Grid size={{ xs: 12, sm: 12, lg: 4  }}>
						<Box
						component="div"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						sx={{ 
							boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
							borderRadius: 2,
							p: 2,
							transition: 'transform 0.3s ease, box-shadow 0.3s ease',
							'&:hover':{transform: 'scale(.7)'}
						}}>
							<Typography 
							variant="h6" 
							fontWeight="bold"
							align="center"
							gutterBottom>
								Spoken Words (Language as Resistance)
							</Typography>
							<Button
							fullWidth
							color="primary"
							variant="contained">
								See spoken words
							</Button>
						</Box>
					</Grid>

					{/* page 2 */}
					<Grid size={{ xs: 12, sm: 12, lg: 4  }}>
						<Box
						component="div"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						sx={{ 
							boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
							borderRadius: 2,
							p: 2,
							transition: 'transform 0.3s ease, box-shadow 0.3s ease',
							'&:hover':{transform: 'scale(.7)'}
						}}>
							<Typography 
							variant="h6" 
							fontWeight="bold"
							align="center"
							gutterBottom>
								Cultural &amp; Political Symbols (Uncle Sam)
							</Typography>
							<Button
							fullWidth
							color="primary"
							variant="contained">
								View Symbols
							</Button>
						</Box>
					</Grid>

					{/* page 2 */}
					<Grid size={{ xs: 12, sm: 12, lg: 4  }}>
						<Box
						component="div"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						sx={{ 
							boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
							borderRadius: 2,
							p: 2,
							transition: 'transform 0.3s ease, box-shadow 0.3s ease',
							'&:hover':{transform: 'scale(.7)'}
						}}>
							<Typography 
							variant="h6" 
							fontWeight="bold"
							align="center"
							gutterBottom>
								Social Media &amp; Aftermath (Poll + Reactions)
							</Typography>
							<Button
							fullWidth
							color="primary"
							variant="contained">
								See aftermath
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>

		<Box 
		component="div"
		display="flex"
		flexDirection="column"
		justifyContent="center"
		alignItems="center" 
		p={5}>
			<Typography 
			variant="h5" 
			fontWeight="bolder"
			align="center" 
			gutterBottom>
				Start with The Red Button &amp; New Orleans”
			</Typography>

			<Button
			variant="contained"
			color="warning"
			size="large"
			onClick={() => navigate('/red-button-and-new-orleans')}>
				See the Red Button &amp; New Orleans
			</Button>
		</Box>

		<Footer />
	</Box>
	);
}