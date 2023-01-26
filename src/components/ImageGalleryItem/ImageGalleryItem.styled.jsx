import styled from 'styled-components';

const ItemGallery = styled.li`
  position: relative;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.03);
  }
`;
export { ItemGallery, Image };
