import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/button/Button";
import { fetchCustomers } from "../../asyncActions/customers";
import Loader from "../UI/loader/Loader";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";

const NFTImages = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customers);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);

  return (
    <div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={customer.image_url}
                  alt="nft image"
                />
              </CardActionArea>
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
