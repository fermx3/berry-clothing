import {
  ItemsContainer,
  ImageContainer,
  ItemContainer,
} from './items-resume.styles';

const ItemsResume = ({ items: { items, total } }) => {
  return (
    <ItemsContainer>
      <h3>You bougth:</h3>
      {items.map((item) => (
        <ItemContainer>
          <ImageContainer>
            <img src={item.imageUrl} alt={item.name} />
          </ImageContainer>
          <h5>{item.name}</h5>
          <div>
            <p>{` X ${item.quantity}`}</p>
          </div>
        </ItemContainer>
      ))}
      <h4>{`Total: $${total}`}</h4>
    </ItemsContainer>
  );
};

export default ItemsResume;
