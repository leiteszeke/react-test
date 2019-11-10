// Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  height: min-content;
  position: relative;
  width: 350px;
  z-index: 2;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;
