import styled from 'styled-components';

export const EmptyCartContainer = styled.div`
  max-width: 800px;
  margin: 4rem auto;

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 3rem;
    margin-top: 0.5rem;
  }
`;

export const CheckoutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
`;

export const HeaderBlockLastChild = styled.div`
  width: 8%;
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
