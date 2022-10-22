import { Box } from '@mui/material';
import HeaderSearch from './Search';
import HeaderNotifications from './Notifications';
import SelectLanguage from './Language';
import ThemeToggler from '@/ThemeToggler';

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      <Box sx={{ mx: 0.5, display: 'flex', alignItems: 'center' }} component="span">
        <HeaderNotifications />
        <HeaderSearch />
        <ThemeToggler />  
        <SelectLanguage />
      </Box>
    </Box>
  );
}

export default HeaderButtons;
