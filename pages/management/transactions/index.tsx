import SidebarLayout from '@/layouts/SidebarLayout';
import { Grid, Container } from '@mui/material';
import RecentOrders from '@/content/Management/Transactions/RecentOrders';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

function ApplicationsTransactions() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <>

      <Container maxWidth="xl" sx={{ marginTop: '2em' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Create Position" />
          <Tab label="Positions" />
        </Tabs>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >

          <Grid item xs={12}>
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

ApplicationsTransactions.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsTransactions;
