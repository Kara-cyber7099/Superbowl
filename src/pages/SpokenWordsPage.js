import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Tooltip,
  Modal,
  Link,
  Button,
  Container
} from "@mui/material";

import RevolutionVideo from '../assets/videos/RevolutionVideo.mp4';
import Footer from '../components/footer/Footer';

const SpokenWordsPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
    <Box sx={{ p: 4, maxWidth: "900px", mx: "auto" }}>
      {/* Hero Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          Spoken Words: Language as Resistance
        </Typography>

        {/* Embedded video clip */}

        <Box sx={{
         width: '100%', 
         borderRadius: 2, 
       }}>
          <video
          autoPlay
          loop
          poster="">
            <source
            src={RevolutionVideo}
            type="video/mp4">
              
            </source>
          </video>
        </Box>

        

      {/* Paragraph 1 */}
      <Typography variant="body1" sx={{ mb: 3, mt:3 }}>
        Kendrick Lamar’s performance begins with a striking declaration:{" "}
        <Tooltip title="Click to learn more" arrow>
          <Typography
            component="span"
            color="primary"
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={handleOpen}
          >
            “The revolution is about to be televised. You chose the right time, but the wrong guy.”
          </Typography>
        </Tooltip>{" "}
        This line is a repurposed echo of Jill Scott’s lyrics{" "}
        <Link
          href="https://www.youtube.com/watch?v=XUi580gA5BQ"
          target="_blank"
          rel="noopener"
        >
          “The revolution will not be televised”
        </Link>
        , itself a cultural remix of Gil Scott-Heron’s famous phrase. By flipping Jill Scott’s
        version, Kendrick re-anchors the phrase into a contemporary context, critiquing the
        commercialization of resistance while reframing the stage as a site of real-time protest.
      </Typography>

      <Box
          component="iframe"
          src="https://www.youtube.com/embed/XUi580gA5BQ"
          title="Jill Scott Clip"
          sx={{
            width: "100%",
            height: "400px",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>

      {/* Paragraph 2 */}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Repurposing Scott’s line is more than homage; it’s a strategy. Kendrick shows how
        language itself can resist domination:
      </Typography>

      <ul>
        <li>
          <Typography variant="body2">
            <strong>Subversion →</strong> He takes a familiar protest phrase and re-codes it
            for new audiences.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Visibility →</strong> By televising the “revolution,” he forces spectators
            to witness uncomfortable truths instead of consuming sanitized entertainment.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Agency →</strong> Declaring “the wrong guy” destabilizes the narrative of
            who has the right to speak and lead, asserting that Black artistry can carry
            revolutionary weight.
          </Typography>
        </li>
      </ul>

      {/* Analysis */}
      <Box sx={{ mt: 4, p: 3, bgcolor: "grey.100", borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" gutterBottom>
          Analysis / Key Takeaways
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Language serves as a resistance and framing tool, reinforcing visual and musical
              storytelling.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Words + stage visuals + music combine for a hypermodal audience experience.
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Modal for interactive quote */}
      <Modal open={openModal} onClose={handleClose}>
        <Box
          sx={{
            p: 4,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 5,
            maxWidth: 500,
            mx: "auto",
            mt: "20vh",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Gil Scott-Heron — Original Context
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            “The revolution will not be televised” is a phrase by Gil Scott-Heron, highlighting
            that real change comes from people’s lived actions, not mainstream media.
          </Typography>
          <Link
            href="https://en.wikipedia.org/wiki/The_Revolution_Will_Not_Be_Televised"
            target="_blank"
            rel="noopener"
          >
            Read More
          </Link>
          <Box sx={{ mt: 2, textAlign: "right" }}>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
    <Footer />
    </>
  );
};

export default SpokenWordsPage;
