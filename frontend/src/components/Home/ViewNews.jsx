import { Button, CardActions, Chip, IconButton } from "@mui/material";
import React from "react";
import { MidHeading, VNContainer, VNContent, VNImg } from "./elements";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ViewNews = ({ news, close }) => {
  return (
    <VNContainer>
      <div style={{ position: "relative" }}>
        <VNImg src={news.image_url} />
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            display: "flex",
            gap: "12px",
          }}
        >
          <Chip label={`8 Favs`} style={{ background: "#ddd" }} />
          <Chip
            style={{ background: "#ddd" }}
            label={`20 Views`}
            icon={<VisibilityIcon style={{ color: "black" }} />}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          //   padding: "18px",
        }}
      >
        <IconButton
          onClick={close}
          style={{ position: "absolute", top: "6px", right: "6px" }}
        >
          <CloseIcon
            style={{
              color: "white",
            }}
          />
        </IconButton>

        <MidHeading
          style={{
            fontSize: "27px",
            width: "90%",
            padding: "18px",
            paddingBottom: "4px",
          }}
        >
          {news.title}
        </MidHeading>
        <VNContent>{news.content}</VNContent>
        <CardActions style={{ padding: "12px" }}>
          <Button
            variant="contained"
            style={{ background: "red" }}
            startIcon={<FavoriteIcon />}
          >
            Add to favorites
          </Button>
          <Button variant="contained">Share</Button>
          <Button
            style={{ marginLeft: "auto", fontWeight: "800", color: "#69b4ff" }}
          >
            Read more
          </Button>
        </CardActions>
      </div>
    </VNContainer>
  );
};

export default ViewNews;
