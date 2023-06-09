import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0;
  top: 0;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  width: 480px;

  background: #fff;

  border-radius: 8px;

  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;

      border: 0;

      background: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      align-items: center;

      margin-top: 8px;

      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;

    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        display: block;
        min-width: 20px;

        font-size: 14px;

        color: #666666;

        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 24px;

    span {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;


export const Actions = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background: #333333;
    color: #fff;

    border-radius: 48px;
    border: 0;

    padding: 12px 24px;
  }

  .secondary {
    padding: 12px 24px;

    color: #D73035;

    font-weight: bold;

    border: 0;

    background: transparent;

    margin-top: 8px;
  }
`;
