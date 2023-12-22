export interface CodeBlock {
  text: string;
  color: string;
}

export const code: CodeBlock[] = [
  { text: "\n// About Me!\n", color: "gray" },
  { text: "var Archit = {", color: "white" },
  { text: "\t//Background", color: "gray" },
  { text: "\teducation: 'Cornell University',", color: "white" },
  { text: "\tdegree: 'Computer Science',", color: "white" },
  { text: "\taspirations: 'Tech Entrepreneur',", color: "white" },
  { text: "\n\t//Scroll to learn more!", color: "gray" },
  { text: "};", color: "white" },
];
