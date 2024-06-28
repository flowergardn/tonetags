import type { IToneTag } from "@/types";
import type { APIContext, APIRoute } from "astro";

type Frontmatter = IToneTag["frontmatter"];

interface MarkdownData {
  frontmatter: Record<string, Frontmatter>;
  url: string;
  file: string;
}

export const GET: APIRoute = async (context: APIContext) => {
  const data = import.meta.glob(["../tones/*.{md,mdx}"], { eager: true });

  const tonetags = Object.keys(data).map((key) => {
    const { frontmatter } = data[key as keyof typeof data] as MarkdownData;
    return {
      tag: frontmatter.tag,
      fullForm: frontmatter.fullForm,
      popular: frontmatter.popular,
      examples: frontmatter.examples,
      draft: frontmatter.draft || false,
    };
  });

  const sorted = tonetags.sort((a, b) => {
    if (a.popular) return -1;
    else if (b.popular) return 1;
    else return 0;
  });


  return new Response(
    JSON.stringify(sorted)
  );
};
