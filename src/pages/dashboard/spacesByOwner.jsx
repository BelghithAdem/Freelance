import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';

export default function SpaceByOwner() {
  const [spacesByOwner, setSpacesByOwner] = useState([]);
  const fetchData = async() =>{
    const response = await axios.get('http://localhost:5000/spaces/getSpacesForUseConnected', {
      headers: {
        'x-auth-token': localStorage.getItem('token').split(" ")[1]
      }
    });

    setSpacesByOwner(response.data.spaces)
  }
  useEffect( () => {
    fetchData()
    
  },[]);
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
       
        {spacesByOwner.map(el =>(
          <>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1675972820598-8ba0b51c9da8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
          </>
        ))}
        

        
      </Grid>
    </>
  );
}
