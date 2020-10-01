export interface ITheme {
  colors: {
    main: string;
    secondary: string;
    text: string;
    textSecondary: string;
    alive: string;
    dead: string;
  };
}

export const theme: ITheme = {
  colors: {
    main: '#2e2e2e',
    secondary: '#ff9100',
    text: 'white',
    textSecondary: '#d3d3d3',
    alive: '#03fc49',
    dead: '#fc0303'
  }
};
