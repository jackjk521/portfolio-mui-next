import React from 'react';
import { Grid, Card, Link } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectGrid() {
  return (
    <Grid container p={2} spacing={2}>
      <Grid item xs={4}>
        {' '}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              PaintToGo
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">
              Simple CRUD for Items and Branch Monitoring
              <br />
              <Typography variant="subtitle">
                Tech Stack: React + Laravel
              </Typography>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                href="https://github.com/jackjk521/PaintToGo"
                underline="none"
              >
                View Github Link
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        {' '}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              SlitherUI
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">
              Snake Game with the game of Life incorporated into it
              <br />
              <Typography variant="subtitle">Tech Stack: Java</Typography>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                href="https://github.com/jackjk521/Slither_UI"
                underline="none"
              >
                View Github Link
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        {' '}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              King Quality BMS
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">
              Dashboard, Inventory, Reports, Bank Management, Admin CRUD
              <br />
              <Typography variant="subtitle">
                Tech Stack: React + Sequelize
              </Typography>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" disabled>
              <Link
                href="https://github.com/jackjk521/PaintToGo"
                underline="none"
              >
                NDA
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        {' '}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              YM Cargo BMS
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">
              Bookings, Purchases, Inventory, Accounting, Reports, Engineering,
              Admin CRUD
              <br />
              <Typography variant="subtitle">
                Tech Stack: CodeIgniter
              </Typography>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" disabled>
              <Link
                href="https://github.com/jackjk521/PaintToGo"
                underline="none"
              >
                NDA
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={4}>
        {' '}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              YM Cargo Company Website
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">
              YM Cargo Company Website
              <br />
              <Typography variant="subtitle">Tech Stack: PHP</Typography>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link href="https://ymcargo.ph/" underline="none">
                View Website
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={4}>
        {' '}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              Custom Clinic System
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">
              Appointment and Health Records Management
              <br />
              <Typography variant="subtitle">
                Tech Stack: React + Laravel
              </Typography>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                href="https://bitbucket.org/jack-solutions/customer-appointment-system"
                underline="none"
              >
                View BitBucket Link
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={4}>
        {' '}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              Custom BMS
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2">
              Inventory, Purchases and Dashboard
              <br />
              <Typography variant="subtitle">
                Tech Stack: NextJS + Django
              </Typography>
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                href="https://bitbucket.org/jack-solutions/customer-appointment-system"
                underline="none"
              >
                View BitBucket Link
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
