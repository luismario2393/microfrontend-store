import { useParams } from "react-router-dom";
import { useProductStore } from "../../store";
import { shallow } from "zustand/shallow";
import { IProduct } from "../../interfaces";
import { useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const Product = () => {
  const { id } = useParams();

  const product = useProductStore(
    (state) => ({
      product: state?.product as IProduct,
    }),
    shallow
  );

  const { getProduct, updateCart } = useProductStore();

  useEffect(() => {
    getProduct(id ?? "");
  }, []);

  const p = product?.product;

  const newProduct = {
    id: p?.id,
    title: p?.title,
    price: p?.price,
    image: p?.image,
    category: p?.category,
    description: p?.description,
    idDeleted: Date.now() + Math.random(),
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
        <img
          src={p?.image}
          alt={p?.title}
          style={{ maxWidth: "100%", objectFit: "contain", height: "750px" }}
        />
      </Grid>

      <Grid item xs={12} sm={5} display="flex" alignItems={"center"}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h1" component={"h1"}>
            {p?.title}
          </Typography>
          <Typography variant="subtitle1" component={"h2"}>
            ${p?.price}
          </Typography>

          <Button
            color="secondary"
            className="circular-btn"
            onClick={() => updateCart(newProduct as IProduct)}
          >
            Agregar al carrito
          </Button>

          <Box>
            <Typography fontWeight={700} variant="subtitle2">
              Categoría
            </Typography>
            <Typography variant="body2">{p?.category}</Typography>
          </Box>
          <Box>
            <Typography fontWeight={700} variant="subtitle2">
              Descripción
            </Typography>
            <Typography variant="body2">{p?.description}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Product;
