import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


const donationAmount = localStorage.getItem('donationAmount');
const cardName = localStorage.getItem('cardName');
const cardNumber = localStorage.getItem('cardNumber');
const date = localStorage.getItem('date');

const products = [
  {
    name: 'Helping Hands',
    desc: 'Grateful for your generous donation. Thanks!',
    price: '₹2000',
  }
];

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: `${cardName}` },
  { name: 'Card number', detail: `${cardNumber}` },
  { name: 'Expiry date', detail: `${date}` },
];

export default function Review() {
  return (
    <React.Fragment>
      <div style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"20px"}}>
        Order summary
      </div>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">₹{donationAmount}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700, fontFamily: "sans-serif !important" }}>
          ₹{donationAmount}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6} >
        <div style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"20px"}}>
            Payment details
          </div>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>



    </React.Fragment>
  );
}