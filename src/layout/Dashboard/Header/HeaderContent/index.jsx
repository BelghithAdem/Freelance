import useMediaQuery from '@mui/material/useMediaQuery';

import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
   
    <Notification />
      {!downLG && <Profile />}
      {downLG && <MobileSection />}

     
    </>
  );
}
