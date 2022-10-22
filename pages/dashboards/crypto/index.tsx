// import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
// import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
// import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Card, Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';
import AccountBalance from '@/content/Dashboards/Crypto/AccountBalance';
// import Wallets from '@/content/Dashboards/Crypto/Wallets';
// import AccountSecurity from '@/content/Dashboards/Crypto/AccountSecurity';
import WatchList from '@/content/Dashboards/Crypto/WatchList';
import RecentOrders from '@/content/Management/Transactions/RecentOrders';
import BoxTitle from '@/components/Title/BoxTitle';
import Factor from '@/components/Charge/Factor/Factor';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MessageList from '@/components/Messages/MessageList';

function DashboardCrypto() {
  const { t } = useTranslation();
  return (
    <>
      {/* <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper> */}
     
      <Container maxWidth="xl" className='my-3'>
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item lg={8} xs={12} >
            <BoxTitle title={t("pageTitles.my tasks")} />
            <RecentOrders />
          </Grid>

          <Grid item lg={4} md={6} xs={12}>
            <BoxTitle title={t("pageTitles.last charge bill")} />
              <Factor />
          </Grid>

          <Grid item lg={4} md={6} xs={12}>
            <BoxTitle title={t("pageTitles.messages")} />
              <MessageList />
          </Grid>

          <Grid item lg={8} xs={12} >
            
            <AccountBalance />
          </Grid>
          
          {/* <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
          
          </Grid> */}
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}