import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import { SUBJECTS } from "../Data";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <Container sx={{ pt: 3, display: "flex", justifyContent: "center", alignItems: "center" }} >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 16 }}
        >
          {SUBJECTS.map(({ name, Icon, id }) => (
            <Grid item xs={2} sm={4} md={4} key={id}>
              <Card
                variant="elevation"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/subject/" + id);
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    height: 100,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {name}
                </Typography>
                <Icon fontSize="inherit" sx={{ height: 100, fontSize: 55 }} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
