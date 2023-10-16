import { HtmlSectionMain, TitleMain, Content } from './SectionMain.styled';

export function SectionMain({ title, children }) {
  return (
    <HtmlSectionMain>
      <TitleMain>{title}</TitleMain>
      <Content>{children}</Content>
    </HtmlSectionMain>
  );
}
