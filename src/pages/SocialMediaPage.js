import React from "react";
import {
  Box,
  Typography,
  Link,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const SocialMediaPage = () => {
  return (
    <Box sx={{ p: 4, maxWidth: "1000px", mx: "auto" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Social Media & Aftermath: Reactions and Reflections
      </Typography>

      {/* Hero Section: Palestine Flag Moment */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Palestine Flag Moment
        </Typography>
        {/* Embedded video placeholder */}
        <Box
          component="video"
          src="https://share.google/videos/yourFlagClip.mp4" // placeholder: replace with actual
          controls
          sx={{ width: "100%", borderRadius: 2, boxShadow: 3, mb: 2 }}
        />
        <Typography variant="body1" sx={{ mb: 2 }}>
          During Kendrick Lamar’s Super Bowl LIX halftime show, a performer
          unfurled a Palestinian flag with “Gaza” and “Sudan” written on it,
          sparking widespread attention. The protester, later identified as{" "}
          <Link
            href="https://theintercept.com/2025/02/10/super-bowl-kendrick-lamar-gaza-sudan-protester/"
            target="_blank"
            rel="noopener"
          >
            Zul-Qarnain Nantambu
          </Link>
          , was part of the 400-member field cast and had concealed the flag
          without prior knowledge of the organisers. He was swiftly tackled by
          security and banned for life from NFL events. The NFL and Roc Nation
          confirmed that the act was not planned or rehearsed.
        </Typography>
      </Box>

      {/* Social Media Reactions */}
      <Typography variant="h6" gutterBottom>
        Social Media Reactions
      </Typography>

      {/* Twitter */}
      <Typography variant="subtitle1" gutterBottom>
        Twitter
      </Typography>
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", mb: 3 }}>
        {[
          "https://share.google/images/Sq9dHTNfri6xRaIyl",
          "https://share.google/images/zoTC2Jpz7tFqOKVgM",
          "https://share.google/images/4eABtqmdqr7n5uPi6",
          "https://share.google/images/hMzkUdtc76lJ3GVaU",
        ].map((src, idx) => (
          <Card key={idx} sx={{ borderRadius: 2, boxShadow: 2 }}>
            <CardMedia
              component="img"
              image={src}
              alt={`Tweet ${idx + 1}`}
              sx={{ borderRadius: 2 }}
            />
          </Card>
        ))}
      </Box>

      {/* Instagram */}
      <Typography variant="subtitle1" gutterBottom>
        Instagram
      </Typography>
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", mb: 3 }}>
        {[
          "https://share.google/images/ndXSXXqEtmHW9AudT",
          "https://share.google/images/2PiFatDLZug04VMkC",
          "https://share.google/images/HydLnJJ0eXpoAxEA7",
        ].map((src, idx) => (
          <Card key={idx} sx={{ borderRadius: 2, boxShadow: 2 }}>
            <CardMedia
              component="img"
              image={src}
              alt={`Instagram post ${idx + 1}`}
              sx={{ borderRadius: 2 }}
            />
          </Card>
        ))}
        <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
          <CardMedia
            component="iframe"
            src="https://www.instagram.com/reel/DOU56TljoeP/embed"
            sx={{ border: 0, minHeight: 400 }}
          />
        </Card>
      </Box>

      {/* TikTok */}
      <Typography variant="subtitle1" gutterBottom>
        TikTok
      </Typography>
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", mb: 4 }}>
        {[
          "https://share.google/images/XkSMQFSkqBavSyoLg",
          "https://share.google/images/nvWWSXHXbX1UTjGe6",
          "https://share.google/images/NgLkQzAUh3oi61Rf6",
          "https://share.google/images/Q5OdfOydOVd0uMw7R",
        ].map((src, idx) => (
          <Card key={idx} sx={{ borderRadius: 2, boxShadow: 2 }}>
            <CardMedia
              component="img"
              image={src}
              alt={`TikTok clip ${idx + 1}`}
              sx={{ borderRadius: 2 }}
            />
          </Card>
        ))}
      </Box>

      {/* Cultural Significance */}
      <Typography variant="body1" sx={{ mb: 4 }}>
        The inclusion of the Palestinian flag during a high-profile event
        underscored the power of performance as a platform for political
        expression. It sparked conversations about the role of artists in
        addressing global issues and the boundaries of activism in entertainment.
      </Typography>

      {/* Poll / Feedback */}
      <Typography variant="h6" gutterBottom>
        Tell us what you thought, besties 💬
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://forms.gle/89WipcZzuhhpovmW9"
        target="_blank"
        rel="noopener"
        sx={{ mb: 4 }}
      >
        Share Your Thoughts
      </Button>

      {/* Analysis */}
      <Box sx={{ p: 3, bgcolor: "grey.100", borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" gutterBottom>
          Analysis / Key Takeaways
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Social media amplifies the hypermodal impact.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Audience interpretations add another layer of meaning, making the
              performance both participatory and reflective.
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default SocialMediaPage;
