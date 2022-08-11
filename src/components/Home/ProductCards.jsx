import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import { useSelector } from "react-redux/es/exports";
import style from "./ProductCards.module.scss";
import BackToTopBtn from "../BackToTopBtn/BackToTopBtn";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

function ProductCards() {
  const theme = useTheme();
  const open = useSelector((state) => state.togleMenu.open);
  const technos = useSelector((state) => state.technos);
  const currentCategory = useSelector((state) => state.filter.currentCategory);

  const result = technos.filter((arr) => arr.category === currentCategory);

  return (
    <Box sx={{ display: "flex" }}>
      <Main open={open}>
        <DrawerHeader />
        <div className={style.cardContainer}>
          {result.map((obj) => (
            <Card key={obj.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={obj.img}
                  alt={obj.name}
                />
                <CardContent>
                  <Typography
                    className={style.cardTitle}
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight='bolder'

                  >
                    {obj.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {obj.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="ul"
                    color="text.secondary"
                    fontWeight="bolder"
                    marginTop='20px'
               
                  >
                    {obj.ingredients.map((array, i) => (
                      <li key={i}>{array}</li>
                    ))}
                  </Typography>
                  <Typography
                    fontWeight="bolder"
                    color="rgb(65, 63, 69)"
                    component="h4"
                    marginTop='20px'
                  >
                    {obj.extName}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="ul"
                    marginTop='10px'
                    color="text.secondary"
                    fontWeight="bolder"
                  >
                    {obj.extIngredients?.map((array, i) => (
                      <li key={i}>{array}</li>
                    ))}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <BackToTopBtn />
      </Main>
    </Box>
  );
}

export default ProductCards;
