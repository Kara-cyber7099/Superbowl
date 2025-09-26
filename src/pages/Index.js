import React from "react";
import {useNavigate} from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardCover,
  Grid,
  Link,
  Button,
  Container,
  Modal,
} from "@mui/material";

// components
import Footer from '../components/footer/Footer';

// assets
import backgroundImage from '../assets/images/backgroundImage.jpg';
import PerformanceSnippet from '../assets/videos/PerformanceSnippet.mp4'

// custom styles
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: "40rem",
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid inherit',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

const Index = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const pages = [
    { title: "Red Button & New Orleans", link: "/red-button-and-new-orleans" },
    { title: "Stage & Visual Design", link: "/stage-and-visual-design" },
    { title: "Costumes & Dancers (America Worn on the Body)", link: "/costumes-and-dancers" },
    { title: "Spoken Words (Language as Resistance)", link: "/spoken-words" },
    { title: "Cultural & Political Symbols", link: "/cultural-and-political-symbols" },
    { title: "Social Media & Aftermath", link: "/social-media-and-aftermath" },
  ];

  return (

    <Box>
      <Box sx={{ 
        height: 'calc(100vh - 64px)',
        backgroundImage:  `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Box
        component="div"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ 
          height: '100%', 
          zIndex: 1, 
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        }}>
            <Container maxWidth="md">
              <Typography variant="h3" fontWeight="bold" align="center">
                From Halftime to Hypermodal
              </Typography>
              
              <Typography 
              variant="h4" 
              fontWeight="bold" 
              align="center"
              gutterBottom>
                <span 
                style={{ 
                  backgroundColor: 'white',
                  borderRadius: 5,
                  padding: 5,
                  color: 'black'
                }}
                >
                  Kendrick Lamar
                </span> at the Super Bowl
              </Typography>

              <Typography 
              variant="h5" 
              align="center"
              color="inherit">
                A multimedia exploration of performance, politics, and symbolism.
              </Typography>
            </Container>
            <Button 
            variant="contained" 
            size="large"
            onClick={handleOpen}
            sx={{ 
              backgroundColor: 'black', 
              color: 'white', 
              py: 2, 
              mt: 2, 
              mx: 2 
            }}>
              Watch the Super Bowl Performance Video
            </Button>
        </Box>
      </Box>

      <Box py={3}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Overview
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 7 }}>
              <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
              sx={{ height: '100%' }}>
                <Typography paragraph gutterBottom>
                  Welcome to this interactive website exploring Kendrick Lamar’s SuperBowl halftime performance. This site is designed to help you unpack the layers of meaning in the show from stage design, choreography, and costumes, to lyrics, cultural symbols, and political commentary. Through videos, images, annotations, and interactive features, you’ll discover how a single performance combines music, visuals, and cultural critique into a hypermodal experience.
                </Typography>
                <Typography paragraph gutterBottom>
                  The site is structured so you can explore the performance step by step. Each page breaks down a specific element: opening sequences, stage design, costumes, spoken words, political symbols, and audience responses. By the end, you will have a clear understanding of how all these elements interconnect to create a rich, multi-layered message.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs:12, lg: 5 }}>
              <Card component="div" elevation={0}>
                <Button href="https://youtu.be/KDorKy-13ak?feature=shared" target="_blank" rel="noopener noreferrer" variant="contained" size="small" sx={{ mb: 0.5 }}>
                  Watch Full Performance
                </Button>

                <video
                autoPlay
                loop
                poster=""
                >
                  <source
                  src={PerformanceSnippet}
                  type="video/mp4"
                  />
                </video>
                {/* <caption>Video cl</caption> */}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="div" py={3}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Navigation Links
          </Typography>
          <Grid container spacing={2}>
            {pages.map((page, index) => (
              <Grid size={{ xs:12, lg:4 }}>
                <Card 
                component="li" 
                sx={{ 
                  borderRadius: 5,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  "&:hover": {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                  } 
                }}>
                  <CardActionArea onClick={() => navigate(page.link)}>
                    <CardContent>
                      <Typography variant="h6" fontWeight="semibold" align="center">
                        {page.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="div" py={3} sx={{ bgColor: 'lightblue' }}>

        <Container maxWidth="lg">
          <Box
          component="div"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={2}>
            <Typography 
            variant="h5" 
            fontWeight="bold" 
            textColor="inherit"
            align="center" 
            gutterBottom>
              YOU CAN ALSO ENJOY THE SUPERBOWEL PLAYLIST BELOW:
            </Typography>
            <Button href="https://music.apple.com/za/album/the-old-guard-is-dead-single-version/1804591803?i=1804591829" target="_blank" rel="noopener noreferrer" variant="contained" size="large">
              Visit the playlist
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />


      {/* modal to watch the video clop */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
          display="flex"
          justifyContent="end"
          align="center"
          onClick={handleClose}
          >
            <Button>
              Close
            </Button>  
          </Box>
          <Card 
          component="div"
          elevation={0} 
          sx={{ maxWidth: 'auto', flexGrow: 1 }} >
            <video
            autoPlay
            loop
            poster="">
              <source 
              src={PerformanceSnippet}
              type="video/mp4"/>
            </video>
            <Typography 
            variant="h6" 
            fontWeight="bold"
            align="center">
              Kendrik Lamar Performance on Super Bowl.
            </Typography>
          </Card>
        </Box>
      </Modal>

    </Box>
  );
};

export default Index;

