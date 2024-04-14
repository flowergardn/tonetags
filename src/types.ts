export interface IToneTag {
  url: string;
  frontmatter: {
    tag: string;
    fullForm: string;
    popular: boolean;
    draft?: boolean;
  };
}
