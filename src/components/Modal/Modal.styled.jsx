import styled from 'styled-components';

const Backdrop = styled.div`
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(160, 157, 157, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const ModalContainer = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: rgb(160, 157, 157);
`;

const ImgLarge = styled.img`
  height: 600px;
  width: 800px;
  object-fit: cover;
`;

export { Backdrop, ModalContainer, ImgLarge };
