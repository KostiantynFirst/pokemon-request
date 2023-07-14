import styled, { keyframes } from "styled-components";
import { ImSpinner } from 'react-icons/im';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

export const PendingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 24px;
`;

export const SpinnerIcon = styled(ImSpinner)`
  margin-right: 10px;
  animation: ${spinAnimation} 2s infinite linear;
`;