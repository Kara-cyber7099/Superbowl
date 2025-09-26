import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Link,
  Button,
} from "@mui/material";

const Index = () => {
  const pages = [
    { title: "Red Button & New Orleans", link: "/page2" },
    { title: "Stage & Visual Design", link: "/page3" },
    { title: "Costumes & Dancers (America Worn on the Body)", link: "/page4" },
    { title: "Spoken Words (Language as Resistance)", link: "/page5" },
    { title: "Cultural & Political Symbols", link: "/page6" },
    { title: "Social Media & Aftermath", link: "/page7" },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
	    pt={{xs: 0, md: 10}}
        sx={{
          height: "100vh",
          width: "100%",
          background: `url(https://images.unsplash.com/photo-1558258021-971dd2148be5?w=1200&auto=format&fit=crop&q=80) center/cover no-repeat`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Overlay for readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        />

        {/* Content on top */}
        <Box sx={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            From Halftime to Hypermodal: Kendrick Lamar at the Super Bowl
          </Typography>
          <Typography variant="h6" gutterBottom>
            A multimedia exploration of performance, politics, and symbolism.
          </Typography>

          {/* Embedded Video */}
          <Box
			  sx={{
			    display: "flex",
			    justifyContent: "center",
			    my: 4,
			    width: "100%",
			    maxWidth: 900, // optional, limits width on large screens
			  }}
			>
			  <Box
			    sx={{
			      position: "relative",
			      width: "100%",
			      paddingTop: "56.25%", // 16:9 aspect ratio
			    }}
			  >
			    <iframe
			      src="https://www.youtube.com/embed/KDorKy-13ak?autoplay=0&mute=1"
			      title="Kendrick Lamar Super Bowl Performance"
			      frameBorder="0"
			      allow="autoplay; encrypted-media"
			      allowFullScreen
			      style={{
			        position: "absolute",
			        top: 0,
			        left: 0,
			        width: "100%",
			        height: "100%",
			      }}
			    />
			  </Box>
			</Box>


          <Typography variant="body2">
            <Link
              href="https://youtu.be/KDorKy-13ak?feature=shared"
              target="_blank"
              rel="noopener"
              underline="hover"
              color="inherit"
            >
              Watch on YouTube
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* Intro / Overview */}
      <Box sx={{ maxWidth: "900px", mx: "auto", p: 4 }}>
        <Typography variant="body1" paragraph>
          Welcome to this interactive website exploring Kendrick Lamar’s Super
          Bowl halftime performance. This site is designed to help you unpack
          the layers of meaning in the show from stage design, choreography, and
          costumes, to lyrics, cultural symbols, and political commentary.
          Through videos, images, annotations, and interactive features, you’ll
          discover how a single performance combines music, visuals, and
          cultural critique into a hypermodal experience.
        </Typography>
        <Typography variant="body1" paragraph>
          The site is structured so you can explore the performance step by
          step. Each page breaks down a specific element: opening sequences,
          stage design, costumes, spoken words, political symbols, and audience
          responses. By the end, you will have a clear understanding of how all
          these elements interconnect to create a rich, multi-layered message.
        </Typography>
      </Box>

      {/* Navigation Cards */}
      <Grid container spacing={3} justifyContent="center" sx={{ p: 4 }}>
        {pages.map((page, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 4,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardActionArea href={page.link}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {page.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Playlist CTA */}
      <Box textAlign="center" sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          You can also enjoy the Super Bowl playlist below:
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://open.spotify.com/playlist/37i9dQZF1DXdIpacQDPDV5"
          target="_blank"
          rel="noopener"
          sx={{ borderRadius: 3, px: 4 }}
        >
          🎶 Open Playlist
        </Button>
      </Box>
    </Box>
  );
};

export default Index;

