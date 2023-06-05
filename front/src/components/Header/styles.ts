import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 198px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1216px;

  .page-details {
    h1 {
      color: white;

      font-size: 32px;
      letter-spacing: 0.6px;
    }

    h2 {
      color: white;

      font-size: 16px;
      font-weight: 400;

      opacity: 0.9;

      margin-top: 6px;
    }
  }
`;
