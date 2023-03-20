import styled from 'styled-components';

export const ItemsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  width: 100%;
  margin-top: 5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.01), 0 4px 20px rgba(0, 0, 0, 0.05);
  h3,
  h4 {
    grid-column: 1/-1;
    text-align: center;
    padding: 1rem 0;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p,
  h4,
  h5 {
    margin: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 120px;

  img {
    width: 100px;
    height: 100%;
    object-fit: cover;
  }
`;
