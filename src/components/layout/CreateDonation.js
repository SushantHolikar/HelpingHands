import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { AddCircle, AssuredWorkload, Person } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


//name phone location image

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      detail: data.get('detail'),
      summary: data.get('summary'),
      label: data.get('label'),
      goalFund: data.get('goalFund'),
      name: data.get('name'),
      phone: data.get('phone'),
      location: data.get('location'),
      image: data.get('image'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '97vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-photo/hand-with-coins-economy_23-2148568038.jpg?w=360&t=st=1681846575~exp=1681847175~hmac=466a680191425ebaf54500c4111a1cab93dda80244a97914226bcb1d8b1cb018)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            // height:'90vh'
          }}
          style={{ "minWidth": "100px", "maxWidth": "497px", "maxHeight": "100vh" }}

        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ minWidth: "67.6%" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              mt: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}



          >
            <Avatar sx={{ m: 1, bgcolor: 'black', color:"#FF8000" }}>
              <AssuredWorkload />
            </Avatar>
            <Typography component="h1" variant="h5">
              Donation Request
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>


              <TextField
                margin="normal"
                required
                fullWidth
                name="title"
                label="Title"
                type="title"
                id="title"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="detail"
                label="Details"
                name="detail"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="summary"
                label="Summary"
                type="summary"
                id="summary"
              />




              <Grid container spacing={2}>

                <Grid item xs={12} sm={6}><TextField
                  margin="normal"
                  required
                  fullWidth
                  name="goalFund"
                  label="Goal Fund"
                  id="goalFund"
                /></Grid>
                <Grid item xs={12} sm={6}><TextField
                  margin="normal"
                  required
                  fullWidth
                  name="label"
                  label="Labels"
                  id="label"
                /></Grid>
</Grid>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <Avatar sx={{ m: 1, bgcolor: 'black', color: "#FF8000" }}> <Person /> </Avatar>
</div>
<Typography component="h1" variant="h5" style={{textAlign:"center"}}>
              Fundraiser Info
            </Typography>

            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}><TextField
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  id="name"
                /></Grid>
                <Grid item xs={12} sm={6}><TextField
                  margin="normal"
                  fullWidth
                  required
                  name="phone"
                  label="Phone"
                  id="phone"
                /></Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="location"
                    label="City"
                    id="location"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="image"
                    label="Image Link"
                    id="image"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}