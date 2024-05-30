import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
export default function Notification() {
  const [notificationByOwner, setNotificationByOwner] = useState([]);
  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/notifications/allNotification', {
      headers: {
        'x-auth-token': localStorage.getItem('token').split(' ')[1]
      }
    });

    setNotificationByOwner(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const markAsRead = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/notifications/updateNotification/${id}`, {
        headers: {
          'x-auth-token': localStorage.getItem('token').split(' ')[1]
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {notificationByOwner.map((el) => (
          <Grid item xs={12} sm={6} md={1} lg={12}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Notification1
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    notify 1
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={() => markAsRead(el?.id)} size="small">
                  Mark as Read
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
