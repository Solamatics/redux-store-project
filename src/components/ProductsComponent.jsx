import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import "./productcomponent.css";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = await response.data;
    setProducts(data);
    console.log("DATA!!!", data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h4>WELCOME TO OUR STORE</h4>
      <div>
        <Grid container spacing={2} sx={{ marginLeft: 0 }}>
          {products.map((product) => {
            const { id, category, image, price, rating, title, description } =
              product;
            return (
              <Grid item xs={12} sm={6} md={3} key={id}>
                <Card sx={{ maxWidth: 400, height: "100%" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="400"
                      image={image}
                      alt={title}
                      sx={{
                        "&.MuiCardMedia-img": {
                          objectFit: "contain",
                        },
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      ${price}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default ProductsComponent;
