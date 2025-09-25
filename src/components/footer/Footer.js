import React from "react";
import { Box, Typography, Link, TextField, Button, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        p: 4,
        bgcolor: "grey.100",
        borderTop: "1px solid",
        borderColor: "grey.300",
      }}
    >
      {/* About */}
      <Typography variant="h6" gutterBottom>
        About
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Karabo Smaye — researcher, writer, and curator of cultural analysis.
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Citations */}
      <Typography variant="h6" gutterBottom>
        Citations & Credits
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        All media, images, and videos are cited from original sources. Broadcast clips are
        used under{" "}
        <strong>Fair Use</strong> for educational and critical analysis purposes.
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            Performance clips: NFL Super Bowl Broadcast
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Images & GIFs: Public social media posts (Twitter, Instagram, TikTok).
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            References:{" "}
            <Link
              href="https://www.britannica.com"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              Britannica
            </Link>
            ,{" "}
            <Link
              href="https://theintercept.com"
              target="_blank"
              rel="noopener"
              underline="hover"
            >
              The Intercept
            </Link>
          </Typography>
        </li>
      </ul>

      <Divider sx={{ my: 2 }} />

      {/* Contact */}
      <Typography variant="h6" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Have questions or feedback? Reach out below.
      </Typography>

      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}
      >
        <TextField label="Your Name" variant="outlined" fullWidth />
        <TextField label="Your Email" variant="outlined" type="email" fullWidth />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </Box>

      {/* Bottom Note */}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: "block", mt: 4, textAlign: "center" }}
      >
        © {new Date().getFullYear()} Karabo Smaye. All rights reserved.
      </Typography>
    </Box>
  );
}
