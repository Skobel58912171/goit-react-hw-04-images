import styled from 'styled-components';

const ListGallery = styled.ul`
  display: grid;
  list-style: none;
  max-width: 1140px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 240px;
  column-gap: 10px;
  gap: 20px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export { ListGallery };
