import { media, styled } from 'theme';

export const OuterCard = styled.div`
  display: inline-flex;
`;

export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.main};
  display: inline-flex;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px;
  color: ${({ theme }) => theme.colors.text};
  max-width: 620px;

  ${media.tablet`
    display: inline-flex;
    word-break: break-word;
  `};

  ${media.tabletS`
    display: block;
    width: 300px;
    word-break: break-word;
  `};
`;

export const CardBodyWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 95%;

  .card-text-name {
    font-weight: bold;
    font-size: 32px;
    text-align: center;
    margin: 0;
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
