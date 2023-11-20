import { Avatar, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

const Profile = () => {
  const retrievedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(retrievedUser);

  return (
    <div style={{ minHeight: "90vh", backgroundColor: "#ECFBFE" }}>
      <Container component="main" maxWidth="xs" style={{ paddingTop: "10vh" }}>
        <Paper
          elevation={3}
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={user.name}
            src="/people19.png"
            sx={{ width: 100, height: 100, marginBottom: 2 }}
          />
          <Typography component="h1" variant="h5" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {user.email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Number: {user.number}
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Profile;
