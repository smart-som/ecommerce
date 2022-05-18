import NextLink from "next/link";
import { Grid, Link, Typography,  Button, } from "@material-ui/core";
import Layout from "../components/Layout";
import db from "../utils/db";
import Product from "../models/Product";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../utils/Store";
import ProductItem from "../components/ProductItem";
import Carousel from "react-material-ui-carousel";
import useStyles from "../utils/styles";

export default function Home(props) {
  const classes = useStyles();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { topRatedProducts, featuredProducts } = props;
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };
  return (
    <Layout>
      <div className={classes.Carousel}>
        <h2 className={classes.headertext}>
          The best site to get accessories for your <br />
          <b>MOBILE AND LAPTOP</b> <br />
          Open an account now and start shopping now.
        </h2>
        <br />
        <Button
          className={classes.iconButton}
          onClick={() => router.push('/register')}
        >
          OPEN AN ACCOUNT 
        </Button>
      </div>

      <br />

      <Typography variant="h2">Popular Products</Typography>
      <Grid container spacing={3}>
        {topRatedProducts.map((product) => (
          <Grid item xs={6} sm={4} md={3} key={product.name}>
            <ProductItem
              product={product}
              addToCartHandler={addToCartHandler}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const featuredProductsDocs = await Product.find(
    { isFeatured: true },
    "-reviews"
  )
    .lean()
    .limit(3);
  const topRatedProductsDocs = await Product.find({}, "-reviews")
    .lean()
    .sort({
      rating: -1,
    })
    .limit(9);
  await db.disconnect();
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  };
}
