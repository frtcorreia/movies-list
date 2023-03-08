import styled from "styled-components";
import { EmptyStateProps } from "./types";

const EmptyStateContainer = styled.div`
  display: flex;
  height: calc(100vh - 109px);
  align-self: center;
  align-items: center;
  flex-direction: row;
`;

const Message = styled.p`
  font-size: 33px;
  margin-bottom: 10px;
`;

export const EmptyState: React.FC<EmptyStateProps> = ({ text }) => {
  return (
    <EmptyStateContainer>
      <Message>{text}</Message>
    </EmptyStateContainer>
  );
};
