export interface CodeStruct {
  text: string;
  color: string;
}

export interface CodeLine {
  codeStructs: CodeStruct[];
}

export const code: CodeLine[] = [
  {
    codeStructs: [{ text: "\n// About Me!\n", color: "gray" }],
  },
  {
    codeStructs: [
      { text: "var ", color: "purple-500" },
      { text: "Archit = {", color: "white" },
    ],
  },
  {
    codeStructs: [{ text: "\t//Background", color: "gray" }],
  },
  {
    codeStructs: [
      { text: "\teducation:", color: "white" },
      { text: " 'Cornell University'", color: "yellow-300" },
      { text: ",", color: "white" },
    ],
  },
  {
    codeStructs: [
      { text: "\tdegree:", color: "white" },
      { text: " 'Computer Science'", color: "yellow-300" },
      { text: ",", color: "white" },
    ],
  },
  {
    codeStructs: [
      { text: "\taspirations:", color: "white" },
      { text: " 'Tech Entrepreneur'", color: "yellow-300" },
      { text: ",", color: "white" },
    ],
  },
  {
    codeStructs: [{ text: "\n\t//Scroll to learn more!", color: "gray" }],
  },
  {
    codeStructs: [{ text: "};", color: "white" }],
  },
];
