import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const OurFeatures = () => {
  const data = [
    {
      icon: "/fastest-delivery.svg",
      title: "3 day delivery guaranteed",
      description:
        "Guaranteed parcel delivery to any part of Bangladesh in just 3 days",
    },
    {
      icon: "/doorstep-pickup-delivery.svg",
      title: "Doorstep pickup and delivery",
      description:
        "Guaranteed parcel delivery to any part of Bangladesh in just 3 days",
    },
    {
      icon: "/sms-update.svg",
      title: "SMS Update",
      description:
        "Receive SMS updates on your registered mobile number during parcel booking and delivery",
    },
    {
      icon: "/next-day-payment.svg",
      title: "Next day payment",
      description:
        "Once the delivery is completed, you will receive the payment on the next day",
    },
    {
      icon: "/best-cod-rates.svg",
      title: "Best cash on delivery rate",
      description: "Cash on delivery charge 0% within Dhaka, 1% outside Dhaka",
    },
    {
      icon: "/secure-handling.svg",
      title: "Secure handling",
      description: "Maximum safe shipment assurance and compensation facility",
    },
  ];
  return (
    <div>
      <Container maxWidth="xl" sx={{padding:"10vh 0"}}>
        <Typography
          variant="h4"
          fontFamily={"Poppins"}
          textAlign={"center"}
          paddingBottom={5}
        >
          Choose{" "}
          <span style={{ color: "#ff8900", fontWeight: "bold" }}>
            Parcel Express
          </span>{" "}
          as your logistics partner
        </Typography>
        <div style={{ padding: "5vh" }}>
          <Grid spacing={3} container>
            {data?.map((item, idx) => (
              <Grid item md={4} key={idx}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {" "}
                  <img src={item?.icon} alt="" />
                </div>

                <Typography variant="h6" textAlign={"center"}>
                  {" "}
                  {item?.title}{" "}
                </Typography>
                <Typography variant="subtitle1" textAlign={"center"}>
                  {" "}
                  {item?.description}{" "}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default OurFeatures;
