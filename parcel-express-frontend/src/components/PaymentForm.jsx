// PaymentForm.js
import {
  Button,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "../utils/notification";

const PaymentForm = () => {
  const navigate = useNavigate();
  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    notification("Payment Done !", "", "success");
    navigate("/user/new-order");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={3}
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Payment Details
        </Typography>
        <Typography component="h4" variant="h6" gutterBottom>
          Bill : 250 Tk
        </Typography>
        <form onSubmit={handlePaymentSubmit}>
          <TextField
            fullWidth
            label="Card Number"
            variant="outlined"
            margin="normal"
            required
            InputProps={{ inputProps: { maxLength: 16 } }}
          />
          <TextField
            fullWidth
            label="Expiry Date"
            variant="outlined"
            margin="normal"
            required
            InputProps={{ inputProps: { maxLength: 5 } }}
          />
          <TextField
            fullWidth
            label="CVV"
            variant="outlined"
            margin="normal"
            required
            InputProps={{ inputProps: { maxLength: 3 } }}
          />
          <TextField
            fullWidth
            label="Card Holder's Name"
            variant="outlined"
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 16 }}
          >
            Confirm & Pay Now
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default PaymentForm;
