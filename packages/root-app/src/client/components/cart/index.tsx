import { FC } from "react";
import {
  Badge,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { DeleteOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { IProduct } from "../../interfaces";
import { shallow } from "zustand/shallow";
import { useProductStore } from "../../store";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Cart: FC<Props> = ({ open, onClose }) => {
  const cart = useProductStore(
    (state) => ({
      cart: state?.cart as IProduct[],
    }),
    shallow
  );

  const { deleteItemCart } = useProductStore();

  const subtotal = cart.cart.reduce(
    (acc: number, item: IProduct) => acc + item.price,
    0
  );

  const tax = subtotal * 0.19;

  const total = subtotal + tax;

  return (
    <Drawer
      open={open}
      anchor="right"
      sx={{ transition: "all 0.5s ease-out" }}
      onClose={onClose}
    >
      <Box sx={{ width: 400, paddingTop: 1 }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Badge
                badgeContent={cart.cart.length}
                color="secondary"
                sx={{ mr: 2 }}
              >
                <ShoppingCartOutlined />
              </Badge>
              <ListItemText
                primary="Carrito de compras"
                primaryTypographyProps={{ variant: "caption" }}
              />
            </ListItemIcon>
          </ListItem>
          <Divider />

          {cart.cart.length > 0 ? (
            <>
              {cart.cart.map((product: IProduct) => (
                <ListItem
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  key={product.id}
                >
                  <Grid xs={7} display="flex" gap={1} container>
                    <Box>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </Box>

                    <Box display="flex" alignItems="center">
                      <Typography variant="subtitle2">
                        {product.title.slice(0, 15)}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={3}>
                    <Typography variant="caption">${product.price}</Typography>
                  </Grid>
                  <Grid xs={2}>
                    <IconButton
                      onClick={() =>
                        deleteItemCart(product.idDeleted as number)
                      }
                    >
                      <DeleteOutlined />
                    </IconButton>
                  </Grid>
                </ListItem>
              ))}
            </>
          ) : (
            <ListItem>
              <ListItemText
                primary="No hay productos en el carrito"
                primaryTypographyProps={{ variant: "caption" }}
                sx={{ textAlign: "center" }}
              />
            </ListItem>
          )}

          <Divider />

          {cart.cart.length > 0 && (
            <>
              <ListSubheader>Resumen de la orden</ListSubheader>

              <Grid container>
                <ListItem>
                  <Grid item xs={6}>
                    <Typography>No. Productos</Typography>
                  </Grid>

                  <Grid item xs={6} display="flex" justifyContent={"end"}>
                    <Typography>{cart.cart.length} items</Typography>
                  </Grid>
                </ListItem>

                <ListItem>
                  <Grid item xs={6}>
                    <Typography>Subtotal</Typography>
                  </Grid>
                  <Grid item xs={6} display="flex" justifyContent={"end"}>
                    <Typography>${subtotal}</Typography>
                  </Grid>
                </ListItem>

                <ListItem>
                  <Grid item xs={6}>
                    <Typography>Iva (19%)</Typography>
                  </Grid>
                  <Grid item xs={6} display="flex" justifyContent={"end"}>
                    <Typography>${tax}</Typography>
                  </Grid>
                </ListItem>

                <ListItem>
                  <Grid item xs={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Total: </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    display="flex"
                    justifyContent={"end"}
                    sx={{ mt: 2 }}
                  >
                    <Typography variant="subtitle1">${total}</Typography>
                  </Grid>
                </ListItem>
              </Grid>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default Cart;
