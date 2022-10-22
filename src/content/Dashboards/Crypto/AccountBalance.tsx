import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Text from 'src/components/Text';
import { Chart } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';
import BoxTitle from '@/components/Title/BoxTitle';
import { useTranslation } from "next-i18next";


const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(1)};
  padding: ${theme.spacing(0.5)};
  border-radius: 60px;
  background: ${theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
    };

  img {
    background: ${theme.colors.alpha.trueWhite[100]};
    padding: ${theme.spacing(0.5)};
    display: block;
    border-radius: inherit;
    height: ${theme.spacing(4.5)};
    width: ${theme.spacing(4.5)};
  }
`
);

function AccountBalance() {
  const theme = useTheme();
  const { t } = useTranslation();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%'
        }
      }
    },
    colors: ['#C084FC', '#448BFF'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
      style: {
        colors: [theme.colors.alpha.trueWhite[100]]
      },
      background: {
        enabled: true,
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: theme.colors.alpha.black[70],
          opacity: 0.5
        }
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: ['کارهای انجام نشده', 'کارهای انجام شده'],
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };
  ;


  const chartSeries = [32, 68];

  return (
    // <Card>
    <Grid container
      direction="row"
      justifyContent="start"
      alignItems="stretch"
      spacing={4}>
      {/* <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
              Account Balance
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
                $54,584.23
              </Typography>
              <Typography
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                1.0045983485234 BTC
              </Typography>
              <Box
                display="flex"
                sx={{
                  py: 4
                }}
                alignItems="center"
              >
                <AvatarSuccess
                  sx={{
                    mr: 2
                  }}
                  variant="rounded"
                >
                  <TrendingUp fontSize="large" />
                </AvatarSuccess>
                <Box>
                  <Typography variant="h4">+ $3,594.00</Typography>
                  <Typography variant="subtitle2" noWrap>
                    this month
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid sm item>
                <Button fullWidth variant="outlined">
                  Send
                </Button>
              </Grid>
              <Grid sm item>
                <Button fullWidth variant="contained">
                  Receive
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid> */}
      {/* <Grid
        sx={{
          position: 'relative'
        }}
        display="flex"
        alignItems="center"
        item
        xs={12}
        md={12}> */}
      {/* <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' }
            }}
          >
            <Divider absolute orientation="vertical" />
          </Box> */}

      {/* <Box py={4} pr={4} flex={1}> */}
      {/* <Grid container spacing={0}> */}

      <Grid
        xs={12}
        sm={6}
        lg={6}
        item
        direction="column"
        display="flex">
        <BoxTitle title={t("pageTitles.building Charge")} />
        <Card sx={{ width: "100%", padding: "20px" }} className=" dark:bg-slate-900 bg-white-100">

          <Grid container
            direction="row"
            display="flex"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={6} >
              <Chart
                height={250}
                options={chartOptions}
                series={chartSeries}
                type="donut"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={6} >
              <div className='flex justify-center'>
                <div className='flex flex-col mr-2 justify-between mt-1'>
                  {chartOptions.colors.map((color) => <div className='block mt-2' style={{ background: color, width: '30px', height: '10px', borderRadius: '2px' }}></div>)}
                </div>
                <div className='flex flex-col mr-2 justify-between'>
                  {chartSeries.map((percent) => <b className='block mt-2 dark:text-slate-100 text-slate-900'>{percent}</b>)}
                </div>
                <div className='flex flex-col mr-2 justify-between'>
                  {chartOptions.labels.map((label) => <p className='mt-2 dark:text-slate-100 text-slate-900'>{label}</p>)}
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container direction="row" display="flex" alignItems="center" sx={{marginTop: '15px'}}>
            <Grid item xs={12} sm={6} lg={6}>
              <Typography sx={{textAlign: "center", color: "##595959"}} fontSize="15px" className='dark:text-slate-100 text-slate-900'>
                تعداد کل شارژهای من
              </Typography>
              <Typography sx={{textAlign: "center", marginTop: '5px'}} fontSize="15px" fontWeight="bold" className='dark:text-slate-100 text-slate-900'>
                45
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Typography sx={{textAlign: "center", color: "##595959"}} fontSize="15px" className='dark:text-slate-100 text-slate-900'>
                مبلغ کل شارژهای من
              </Typography>
              <Typography sx={{textAlign: "center", marginTop: '5px'}} fontSize="15px" fontWeight="bold" className='dark:text-slate-100 text-slate-900'>
              ۱۹،۰۰۰،۰۰۰ تومان
              </Typography>
            </Grid>
          </Grid>

        </Card>
      </Grid>

      <Grid
        xs={12}
        sm={6}
        lg={6}
        item
        direction="column"
        display="flex">
        <BoxTitle title={t("pageTitles.my tasks")} />
        <Card sx={{ width: "100%", padding: "20px" }} className=" dark:bg-slate-900 bg-white-100">
          <Chart
            height={250}
            options={chartOptions}
            series={chartSeries}
            type="donut"
          />
        </Card>
      </Grid>


      {/* <Grid xs={12} sm={7} item display="flex" alignItems="center">
                <List
                  disablePadding
                  sx={{
                    width: '100%'
                  }}
                >
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="BTC"
                        src="/static/images/placeholders/logo/bitcoin.png"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="BTC"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Bitcoin"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        20%
                      </Typography>
                      <Text color="success">+2.54%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="XRP"
                        src="/static/images/placeholders/logo/ripple.png"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="XRP"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Ripple"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        10%
                      </Typography>
                      <Text color="error">-1.22%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="ADA"
                        src="/static/images/placeholders/logo/cardano.png"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="ADA"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Cardano"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        40%
                      </Typography>
                      <Text color="success">+10.50%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <img
                        alt="ETH"
                        src="/static/images/placeholders/logo/ethereum.png"
                      />
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="ETH"
                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                      secondary="Ethereum"
                      secondaryTypographyProps={{
                        variant: 'subtitle2',
                        noWrap: true
                      }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        30%
                      </Typography>
                      <Text color="error">-12.38%</Text>
                    </Box>
                  </ListItem>
                </List>
              </Grid> */}
    </Grid>
    /* </Box> */
    // </Grid>
    // </Grid>
    // </Card>
  );
}

export default AccountBalance;
