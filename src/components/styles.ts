import { media, styled } from 'theme';

export const OuterCard = styled.div`
  display: inline-flex;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.main};
  display: inline-flex;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;

  .card-image {
    width: 100%;
  }

  ${media.tablet`
    display: inline-flex;
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
  width: 100%;

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
    border: none;
    background: none;
    font-size: 20px;
    
    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .list-no-style {
    list-style-type:none;
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
