import { createTheme } from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';
const theme = createTheme({
  typography: {
    fontFamily: 'GmarketSansMedium',
  },
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
      // dark: '#afafaf', // 직접 정의할 경우, 정의해 준 컬러가 들어감. 정의하지 않을 경우 main의 dark가 설정됨
    },
  },
});
export default theme;

// Material-UI Theme Creator 는 나중에 참고할 것
