import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "../utils/notification";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleTogglePasswordVisibility = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const submitData = () => {
    fetch(
      `http://localhost:8080/api/registration?name=${values?.name}&email=${values?.email}&number=${values?.number}&password=${values?.password}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.message) {
          notification("Registration Done ! ", "", "success");
          navigate("/login");
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    if (values?.email && values?.name && values?.number && values?.password) {
      submitData();
    } else {
      notification("Submit all info", "", "error");
    }
  };

  return (
    <div style={{ minHeight: "90vh", backgroundColor: "#82e4f626" }}>
      <Container maxWidth="xl" sx={{ padding: "10vh" }}>
        <Grid
          container
          spacing={2}
          sx={{ boxShadow: "1px 2px 30px 5px #e2e2e2" }}
        >
          <Grid
            item
            md={6}
            sx={{
              backgroundImage: `url("/public/auth-bg.png")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              padding: "10vh",
            }}
          >
            <img src="/public/auth-image.png" alt="" srcSet="" />
          </Grid>
          <Grid item md={6} sx={{ backgroundColor: "white" }}>
            <Typography variant="h5" textAlign={"center"} marginTop={5}>
              Register Here
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
                <TextField
                  label="Name"
                  type="text"
                  fullWidth
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  value={values.email}
                  onChange={handleChange("email")}
                  margin="normal"
                />
                <TextField
                  label="Mobile"
                  type="text"
                  fullWidth
                  value={values.number}
                  onChange={handleChange("number")}
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type={values.showPassword ? "text" : "password"}
                  fullWidth
                  value={values.password}
                  onChange={handleChange("password")}
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    backgroundColor: "#0089A3",
                    "&:hover": { backgroundColor: "#0089A3" },
                  }}
                >
                  Register
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RegisterPage;
