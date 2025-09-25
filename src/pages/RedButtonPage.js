import React, { useState } from "react";
import {
  Box,
  Typography,
  Tooltip,
  Link,
  Button,
  Modal,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent
} from "@mui/material";

export default function RedButtonPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        {/* Replace with actual video embed */}
        <Box
          component="iframe"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Red Button & Superdome Opening"
          sx={{
            width: "100%",
            height: { xs: "200px", sm: "400px" },
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>

      {/* Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        The Red Button &amp; New Orleans: Launching the Portal
      </Typography>

      {/* Paragraph 1 */}
      <Typography paragraph>
        The opening of the performance is immediately striking: a bright{" "}
        <Tooltip title="Brand + gateway: the start button that initiates the performance’s portal.">
          <span style={{ textDecoration: "underline", cursor: "help" }}>
            Apple Music red button
          </span>
        </Tooltip>
        . On one level, this is a corporate branding choice. On another, it acts
        as a symbolic start button, inviting the audience into a curated portal
        of music, movement, and political commentary. Pressing “start” signals
        the beginning of a hypermodal experience where visuals, sound, and
        symbolism work together to deliver layered meaning.
      </Typography>

      {/* Paragraph 2 */}
      <Typography paragraph>
        The setting,{" "}
        <Link
          href="https://www.history.com/topics/us-states/new-orleans"
          target="_blank"
          rel="noopener"
          underline="hover"
        >
          New Orleans
        </Link>
        , is deeply meaningful. Known for its rich Black cultural history, jazz
        traditions, and post-Katrina political struggles, the city frames the
        performance in a context of resilience, resistance, and celebration. The
        Superdome itself embodies this duality: a site of historic entertainment
        and of social challenges. By opening the performance here, Kendrick
        anchors his show in a specific political and cultural landscape.
        <Button onClick={handleOpen} size="small" sx={{ ml: 1 }}>
          Why New Orleans?
        </Button>
      </Typography>

      {/* Paragraph 3 */}
      <Typography paragraph>
        The opening track isn’t by Kendrick himself, but by Ghais Guevara, who
        is a hip-hop artist, political activist, and cultural commentator. The
        choice of this song sets both a political and spiritual tone for what
        follows. It signals to the audience that the performance is not just
        about halftime entertainment, but a deeper statement about social and
        cultural identity. By foregrounding Ghais’s voice, Kendrick anchors the
        show within a tradition of resistance, making it clear that the stage is
        also a platform for protest.
      </Typography>
      <Link
        href="https://music.apple.com/za/album/the-old-guard-is-dead-single-version/1804591803?i=1804591829"
        target="_blank"
        rel="noopener"
        underline="hover"
      >
        🎵 Listen to the song here
      </Link>

      {/* Key Takeaways */}
      <Card sx={{ mt: 4, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Key Takeaways
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="The red button functions as both a visual entry point and a symbolic signal that viewers are entering a multi-layered, hypermodal performance." />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="New Orleans provides a cultural and political anchor, helping the audience interpret the layers of meaning that unfold in the performance." />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 3,
            maxWidth: 600,
            mx: "auto",
            mt: "10%",
            p: 4,
            boxShadow: 5,
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Why New Orleans?
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Hub of Black musical and cultural traditions" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Superdome’s historical significance" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Post-Katrina social and political context" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Legacy of resistance and performance art" />
            </ListItem>
          </List>
          <Typography variant="body2" sx={{ mt: 2 }}>
            External Links:{" "}
            <Link
              href="https://www.history.com/topics/us-states/new-orleans"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              History.com
            </Link>{" "}
            |{" "}
            <Link
              href="https://www.jstor.org/stable/264667"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              JSTOR
            </Link>
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
