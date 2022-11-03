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
  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);

  return (
    <div>
      {customers.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {customers.map((customer) => (
            <Card key={uuid()} sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={250}
                  image={customer.image_url}
                  alt={customer.name}
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {customer.name}
                </Typography>
              </CardContent>
              <Button
                component={"a"}
                href={customer.permalink}
                target="_blank"
                fullWidth
                color="secondary"
                variant="contained"
              >
                more detailed
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
