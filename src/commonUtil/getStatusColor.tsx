import { LifeStatusConst } from 'store';
import { theme as mainTheme } from 'theme';

export const getStatusColor = (status: LifeStatusConst) => {
  switch (status) {
    case LifeStatusConst.Alive:
      return mainTheme.colors.alive;

    case LifeStatusConst.Dead:
      return mainTheme.colors.dead;

    default:
      return mainTheme.colors.textSecondary;
  }
};
