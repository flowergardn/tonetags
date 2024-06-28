export interface IToneTag {
  url: string;
  frontmatter: {
    tag: string;
    fullForm: string;
    popular: boolean;
    examples: string[];
    draft?: boolean;
  };
}
