import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import Button from "../UI/button/Button";
import { fetchCustomers } from "../../asyncActions/customers";
import Loader from "../UI/loader/Loader";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const NFTImages = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customers);
  console.log(customers);
  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);

  return (
    <div>
      {customers.length > 0 ? (
        <div
          style={{
            width: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {customers.map((customer) => (
            <Card key={uuid()} sx={{ maxWidth: 345 }}>
              <CardActionArea key={uuid()}>
                <CardMedia
                  component="img"
                  height="300"
                  image={customer.image_url}
                  alt={customer.name}
                  key={uuid()}
                />
              </CardActionArea>
              <CardContent key={uuid()}>
                <Typography
                  key={uuid()}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {customer.name}
                </Typography>
              </CardContent>
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                key={uuid()}
              >
                Подробнее
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default NFTImages;
