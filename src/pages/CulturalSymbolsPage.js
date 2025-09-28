import React, { useState } from "react";
import {
  Box,
  Typography,
  Tooltip,
  Link,
  Modal,
  Button,
} from "@mui/material";

import gif from '../assets/images/gif.gif';
import uncleSam from '../assets/videos/uncleSam.mp4';

import Footer from '../components/footer/Footer';

const CulturalSymbolsPage = () => {
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
          Cultural & Political Symbols: Uncle Sam Reimagined
        </Typography>

        <Box sx={{ width: '100%' }}>
          <video
          style={{ width: '100%' }}
          autoPlay
          loop
          poster="">
            <source
            src={uncleSam}
            type="video/mp4"/>
          </video>
        </Box>
        
      </Box>

      {/* Paragraph 1 */}
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Tooltip title="America’s national personification; click to learn history & critique." arrow>
          <Link
            href="https://www.britannica.com/topic/Uncle-Sam"
            target="_blank"
            rel="noopener"
            sx={{ fontWeight: "bold" }}
          >
            Uncle Sam
          </Link>
        </Tooltip>{" "}
        is one of America’s most recognisable symbols. Traditionally, he is a white male
        figure used in recruitment posters, propaganda, and national myth-making. In
        Kendrick Lamar’s performance, this figure is reimagined because a Black man
        (Samuel L. Jackson) plays the role. This casting flips the script on who gets to
        embody national symbols and who is usually expected to perform patriotism.
      </Typography>

      {/* Paragraph 2 */}
      <Typography variant="body1" sx={{ mb: 3 }}>
        This version matters because it:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            Highlights the historical exclusion of Black Americans.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Critiques expectations of national loyalty.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Recasting interrogates power, identity, and belonging in America.
          </Typography>
        </li>
      </ul>

      {/* Paragraph 3 Serena Williams */}
      <Typography variant="body1" sx={{ mb: 2 }}>
        <Tooltip title="A dance once criticized; now reclaimed in this performance." arrow>
          <Typography
            component="span"
            color="primary"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={handleOpen}
          >
            Serena Williams
          </Typography>
        </Tooltip>{" "}
        makes a brief but powerful appearance during the Super Bowl show, performing a
        Crip Walk, a dance move associated with gang culture in Los Angeles. Her
        presence is deeply symbolic because she is from Compton, and she first performed
        a Crip Walk publicly after her Wimbledon win in 2012, which drew major media
        backlash.
      </Typography>

      {/* Crip Walk GIF */}
      <Box
        component="img"
        src={gif}
        alt="Serena Williams Crip Walk"
        sx={{
          width: "100%",
          maxWidth: "500px",
          height: '500px',
          objectFit: 'fit',
          borderRadius: 2,
          mb: 2,
          boxShadow: 2,
        }}
      />

      <Typography variant="body1" sx={{ mb: 3 }}>
        Her reappearance of that same move on Kendrick’s stage operates on multiple
        levels:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            Reclaiming a dance once criticised and used to shame Black cultural expression.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Commentary on public judgment of Black women and how their expressions are
            policed.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Reminder of personal and communal history, including her sister Yetunde Price,
            tragically killed by a Crip gang member in 2003.
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
              Repurposed symbols provoke reflection on race, identity, and national mythology.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Visual and casting choices reinforce performance critique.
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Modal for Serena Williams / Crip Walk */}
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
            Serena Williams & The Crip Walk
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            The Crip Walk is a dance move rooted in Los Angeles gang culture. Serena
            Williams first performed it after her Wimbledon 2012 victory, sparking backlash.
            Reclaiming it here, she transforms critique into cultural power.
          </Typography>
          <Link
            href="https://time.com/6149189/serena-williams-crip-walk-meaning/"
            target="_blank"
            rel="noopener"
          >
            Read More — Time Magazine
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

export default CulturalSymbolsPage;
