import React, { useState } from "react";
import {
  Box,
  Typography,
  Tooltip,
  Link,
  Modal,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

export default function CostumesDancersPage() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (item) => setOpenModal(item);
  const handleClose = () => setOpenModal(null);

  return (
    <Box
      sx={{
        maxWidth: "900px",
        mx: "auto",
        px: 2,
        py: 4,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Hero Media Grid */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src="https://share.google/images/w3bSMZWUvUTZAILA1"
              alt="Dancers in flags"
              sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src="https://share.google/images/uN2oYNurvqfAFfHpb"
              alt="Angel wing brooch"
              sx={{ width: "100%", borderRadius: 2, boxShadow: 3, mb: 2 }}
            />
            <Box
              component="img"
              src="https://share.google/images/MjpayEq9Ax4FMEKKu"
              alt="GLORIA jacket"
              sx={{ width: "100%", borderRadius: 2, boxShadow: 3, mb: 2 }}
            />
            <Box
              component="img"
              src="https://share.google/images/DDdOv5c7Aj4HujquA"
              alt="Evil eye ring"
              sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Costumes &amp; Dancers: America Worn on the Body
      </Typography>

      {/* Paragraph 1 */}
      <Typography paragraph>
        The dancers’ costumes reimagined the{" "}
        <Link
          href="https://nyassembly.gov/member_files/063/20050930c/#:~:text=Since%20then%2C%20Americans%20have%20fought,democracy%20represented%20by%20the%20flag.&text=Display%20the%20flag%20from%20sunrise,dignified%20way%2C%20preferably%20by%20burning."
          target="_blank"
          rel="noopener"
          underline="hover"
        >
          American Flag
        </Link>
        , splitting its iconic red, white, and blue into fragments worn by
        different groups. This act of re-semiotization transforms a national
        symbol into wearable fabric, which highlights how America’s identity is
        both divided and contested. The choreography emphasised this
        fragmentation: dancers moved in tension and unity, at times colliding, at
        times synchronising. By wearing the flag on their bodies, the performers
        turned patriotism into something lived and embodied, rather than
        abstract. The effect is both critical and symbolic: it questions who
        truly gets to “wear” America, while also reclaiming the flag as a site of
        resistance.
      </Typography>

      {/* Paragraph 2 */}
      <Typography paragraph>
        Kendrick’s outfit carried layers of meaning through carefully chosen
        details:
      </Typography>

      <ul>
        <li>
          <Tooltip title="Symbol of messenger and protection.">
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => handleOpen("angel")}
            >
              Angel wing brooch
            </span>
          </Tooltip>
          : A symbol of protection and divine guidance, the brooch evokes{" "}
          <Link
            href="https://www.britannica.com/topic/Hermes-Greek-mythology?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            Hermes
          </Link>{" "}
          /{" "}
          <Link
            href="https://www.britannica.com/topic/Hermes-Greek-mythology?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            Mercury
          </Link>
          , the mythological messenger. This frames Kendrick as a cultural
          messenger bringing truth to the stage.
        </li>
        <li>
          <Tooltip title="Reference to God’s glory.">
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => handleOpen("gloria")}
            >
              “GLORIA” jacket
            </span>
          </Tooltip>
          : The word “Gloria” translates to “glory” and carries spiritual
          weight, sacralising the performance and suggesting a connection to
          divine presence and higher purpose.
        </li>
        <li>
          <Tooltip title="Protection from hostile or watchful gazes.">
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => handleOpen("evilEye")}
            >
              Evil eye ring
            </span>
          </Tooltip>
          : A talisman against hostile gazes, the ring symbolises protection
          from scrutiny and envy. On stage, it underscores how visibility and
          surveillance weigh heavily on Black bodies in America. Learn more
          about the{" "}
          <Link
            href="https://evileyecollective.com/pages/evil-eye-meaning"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            evil eye
          </Link>
          .
        </li>
      </ul>

      <Typography paragraph>
        Together, these costume choices amplify the political and spiritual
        framing of the performance. Kendrick’s minimalist yet symbol-rich outfit
        sets him apart as both vulnerable and protected, an artist standing in
        the spotlight while guarded by spiritual and cultural shields.
      </Typography>

      {/* Key Takeaways */}
      <Card sx={{ mt: 4, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Key Takeaways
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Costumes and choreography communicate political, cultural, and
            spiritual messages visually.
          </Typography>
          <Typography variant="body1">
            • Dancers and Kendrick function as symbolic vessels for layered
            critique.
          </Typography>
        </CardContent>
      </Card>

      {/* Modals */}
      <Modal open={openModal === "angel"} onClose={handleClose}>
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
            Angel Wing Brooch
          </Typography>
          <Typography>
            Common motif symbolising protection and divine guidance. Evokes
            Hermes/Mercury, casting Kendrick as a messenger of culture and
            critique.
          </Typography>
          <Box textAlign="right" mt={2}>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={openModal === "gloria"} onClose={handleClose}>
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
            GLORIA Jacket
          </Typography>
          <Typography>
            Carries religious and spiritual significance. Suggests divine
            presence, higher purpose, and sacralises the performance space.
          </Typography>
          <Box textAlign="right" mt={2}>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={openModal === "evilEye"} onClose={handleClose}>
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
            Evil Eye Ring
          </Typography>
          <Typography>
            Common motif symbolising spiritual protection. Kendrick uses it to
            signal resistance against hostile gazes and societal surveillance.
          </Typography>
          <Box textAlign="right" mt={2}>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
