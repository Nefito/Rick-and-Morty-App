import * as styledComponents from 'styled-components';

import { GlobalStyle, ScrollDisable } from './global';
import { media } from './media';
import { ITheme, theme } from './theme';
 
const { 
  default: styled,
  css, 
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider, theme, GlobalStyle, ScrollDisable, media };
