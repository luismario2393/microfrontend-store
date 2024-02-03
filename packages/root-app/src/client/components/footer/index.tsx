import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FacebookOutlined, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      style={{
        maxHeight: "100px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          borderTop: "1px solid",
          borderColor: "gray.2",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0px 30px",
          }}
        >
          <Box display="flex" flexDirection={"column"} gap={2}>
            <RouterLink
              to={"https://www.facebook.com/"}
              target={"_blank"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FacebookOutlined />
              Facebook
            </RouterLink>
            <RouterLink
              to={"https://www.instagram.com/"}
              target={"_blank"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Instagram />
              Instagram
            </RouterLink>
          </Box>
          <Box>
            <RouterLink
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Sufer |</Typography>
              <Typography sx={{ ml: 0.5 }}>Store</Typography>
            </RouterLink>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
