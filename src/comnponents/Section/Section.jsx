import { HtmlSection, Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <HtmlSection>
      <Title>{title}</Title>
      {children}
    </HtmlSection>
  );
}
