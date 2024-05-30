// material-ui

import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import { useEffect,useState } from 'react';
import axios from "axios"
export default function DashboardDefault() {
  const [data ,setData] = useState()
  const fetchData = async()=>{
    try{
      const response = await axios.get("http://localhost:5000/statics/get_all_statics") 
      setData(response.data)
    }catch(err){
      console.error(err.message)
    }

  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Spaces" count={data?.spaceCount || 0}  />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Categories" count={data?.categorieCount || 0}   />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Users" count={data?.userCount || 0}  />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Alerts" count={data?.notificationsCount || 0}   />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
    </Grid>
  );
}
