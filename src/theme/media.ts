import { css, FlattenSimpleInterpolation } from 'styled-components';

interface IBreakpoints {
  laptopL: number;
  laptop: number;
  tablet: number;
  tabletS: number;
  phoneL: number;
  phoneM: number;
  phoneS: number;
  [sizeKey: string]: number;
}

export const sizes: IBreakpoints = {
  laptopL: 1439,
  laptopM: 1300,
  laptop: 1024,
  tablet: 768,
  tabletS: 620,
  phoneL: 425,
  phoneM: 375,
  phoneS: 320
};

export const getBreakpointsRange = () =>
  Object.values(sizes)
    .sort((a, b) => a - b)
    .map(el => `${(el / 16).toFixed(1)}em`);

export const media = Object.keys(sizes).reduce<
  Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => FlattenSimpleInterpolation>>((acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(literals, ...placeholders)}
    }
  `;
    return acc;
  }, {});
