import { CHANGE_THEME } from '../constants/index';

export const changeTheme = theme => ({
  type: CHANGE_THEME,
  theme,
});
