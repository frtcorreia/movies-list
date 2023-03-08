import { EmptyStateContainer, Message } from "./styled";
import { EmptyStateProps } from "./types";

export const EmptyState: React.FC<EmptyStateProps> = ({ text }) => {
  return (
    <EmptyStateContainer>
      <Message>{text}</Message>
    </EmptyStateContainer>
  );
};
