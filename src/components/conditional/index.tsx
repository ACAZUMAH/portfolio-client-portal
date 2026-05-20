export interface ConditionalProps {
  condition: unknown;
  children: React.ReactNode;
}

export const Conditional: React.FC<ConditionalProps> = ({ children, condition }) => {
  if (!condition) return null;
  return <>{children}</>;
};
