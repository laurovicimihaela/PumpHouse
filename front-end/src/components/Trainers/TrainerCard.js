import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import image from "../../assets/Gym/gym.jpg";

export default function TrainerCard({ id, first_name, last_name, email }) {
  return (
    <ImageListItem key={id}>
      <img
        src={`${image}?w=248&fit=crop&auto=format`}
        srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={`${first_name} ${last_name}`}
        loading="lazy"
      />
      <ImageListItemBar title={`${first_name} ${last_name}`} subtitle={email} />
    </ImageListItem>
  );
}
