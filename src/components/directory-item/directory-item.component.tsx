import { useNavigate } from "react-router-dom";

import { Category } from "../categories-directory/categories-directory.component";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

type DirectoryItemProps = {
  category: Category;
}

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title}`);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
