import React, { useState } from "react";
import {
  Box,
  Typography,
  Tooltip,
  Link,
  Button,
  Modal,
  Card,
  CardContent,
  Grid,
  Divider,
  Container
} from "@mui/material";

import Footer from '../components/footer/Footer';

import TicTacToeGame from '../assets/videos/TicTacToeGame.mp4';
import jailYard from '../assets/images/jailYard.jpg';

export default function StageVisualDesignPage() {
  const [openSquare, setOpenSquare] = useState(null);

  const handleOpenSquare = (square) => setOpenSquare(square);
  const handleCloseSquare = () => setOpenSquare(null);

  // Meaning of each tic-tac-toe square (can be adjusted)
  const squareMeanings = {
    1: "Symbolizes the illusion of equal opportunity, though not all players start the same.",
    2: "Highlights systemic advantages that benefit certain groups.",
    3: "Represents the barriers stacked against marginalized communities.",
    4: "The role of strategy and power in shaping outcomes in society.",
    5: "Center square: the American dream, contested and unevenly accessible.",
    6: "Represents winners framed as 'deserving' regardless of privilege.",
    7: "Shows those excluded from winning, trapped in cycles of inequality.",
    8: "Highlights structural rules that dictate who can succeed.",
    9: "The inevitability of systemic losers in this 'game.'",
  };

  return (
    <Box component="div">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', pt: '64px', mb:4 }}>
          <Card elevation={0} sx={{ borderRadius: 2, mb:2 }}>
            <Box
              component="video"
              src={TicTacToeGame} // placeholder: replace with actual
              controls
              autoPlay
              muted
              sx={{ width: "100%", borderRadius: 2, boxShadow: 3, mb: 2 }}
            />          
          </Card>
          <Typography variant="h4" fontWeight="bold" align="center">
            Stage &amp; Visual Design: The Great Game of America
          </Typography>
        </Box>
      </Container>

      <Box py={3}>
        <Container maxWidth="md">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Quote
          </Typography>
          <Typography paragraph gutterBottom>
            Samuel L. Jackson opens with: “This is the great game of America.” This frames the stage as a symbolic arena where strategies, winners, and losers are highlighted, a metaphor for systemic inequities and societal power dynamics.
          </Typography>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Tic-Tac-Toe Stage
          </Typography>
          <Typography paragraph gutterBottom>
            The stage was initially laid out like a <Link href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank">tic-tac-toe board game</Link>, a familiar and playful setup that most viewers instantly recognise. In reality, tic-tac-toe is a simple children’s game where players compete to “win” by aligning three marks in a row. Repurposing the stage in this format was deliberate: it frames America itself as a “game” of winners and losers, where certain players are set up with advantages while others are destined to lose. This setup prompts the audience to consider competition, strategy, and exclusion as integral components of society.
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Box 
            component="img" 
            src={jailYard} 
            sx={{ width: '100%', objectFit: 'cover', borderRadius: 2 }}
            />
            <Link href="https://www.naacp.org/issues/criminal-justice/" target="_blank">
              Fight racial discrimination by being part of the movement
            </Link>
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Jail Yard Transformation
          </Typography>
          <Typography paragraph gutterBottom>
            When the stage lit up and transformed from a tic-tac-toe board into the image of a jail yard, the performance shifted from playfulness to critique. This visual repurposing turns a childhood game into a biting commentary on social control and incarceration. This transition mirrors how American structures can entrap rather than free, particularly for Black communities. By referencing mass incarceration directly through stage design, Kendrick nods to the disproportionate imprisonment of Black people, interweaving cultural play with political protest. This simultaneity is the overlap of the innocent and the oppressive, which is central to the performance’s power, showing how entertainment, identity, and injustice are deeply entangled.
          </Typography>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="sm">
          <Typography variant="h6" fontWeight="bold" align="center" sx={{ mt: 3, mb: 1 }}>
            Explore the Tic-Tac-Toe Stage
          </Typography>
          <Grid container spacing={1} sx={{ mb: 4 }}>
            {Array.from({ length: 9 }, (_, i) => i + 1).map((square) => (
              <Grid size={4} key={square}>
                <Box
                  onClick={() => handleOpenSquare(square)}
                  sx={{
                    height: 70,
                    border: "2px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "grey.200" },
                  }}
                >
                  {square}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="lg">
          <Card sx={{ mt: 4, borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Key Takeaways
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Stage layout is both literal and symbolic, illustrating the
                societal “game” of inequality.
              </Typography>
              <Divider />
              <Typography variant="body1" sx={{ mt: 1 }}>
                Light, layout, and props are repurposed to carry social and
                political meaning.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Footer />

      <Modal open={!!openSquare} onClose={handleCloseSquare}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 3,
            maxWidth: 500,
            mx: "auto",
            mt: "15%",
            p: 4,
            boxShadow: 5,
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Square {openSquare}
          </Typography>
          <Typography>{squareMeanings[openSquare]}</Typography>
          <Box textAlign="right" mt={2}>
            <Button onClick={handleCloseSquare} variant="contained">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
