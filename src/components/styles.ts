import { media, styled } from 'theme';

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.main};
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px;
  width: 740px;
  color: ${({ theme }) => theme.colors.text};

  .card-image {
    width: 100%;
  }

  ${media.tablet`
    width: 100%;
    word-break: break-all;
  `};

  ${media.tabletS`
    display: block;
    width: 300px;
    word-break: break-word;
  `};
`;

export const CardBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;

  .card-text__name {
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    margin: 0;
  }

  .card-text__species-status {
    font-size: 24px;
    margin: 0 0 18px 8px;
  }

  .link-no-style {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const CardBodyElement = styled.div<{ margin: string }>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};
  font-size: 20px;

  .card-text__gray {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
