import React, { useState } from "react";
import { TextField, Button, Link, Grid, Typography, Box, Paper } from "@mui/material/";
import Header2 from "../components/Header2";

const SignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputs, setInputs] = useState({
    id: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 요청됨");
    setInputs({
      ...inputs,
      id: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Header2 />
      <Grid container component="main" sx={{ height: "93vh" }}>
        {/* <CssBaseline /> */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ backgroundColor: "#f2f1d5" }}
        >
          <Box
            sx={{
              my: 36,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" fontFamily="Jeju Myeongjo" color="#18264f">
              UNIVMENT 로그인
            </Typography>
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
              <TextField
                autoFocus
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="로그인 유지"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "#18264f",
                  fontFamily: "Jeju Myeongjo",
                }}
              >
                로그인
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    비밀번호 찾기
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="/SignUp" variant="body2" fontFamily="Jeju Myeongjo" color="#18264f">
                    회원가입
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignIn;
