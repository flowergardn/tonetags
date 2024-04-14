import type { IToneTag } from "@/types";
import { IndividualToneTag } from "./Individual";

export const ToneTags = ({ posts }: { posts: IToneTag[] }) => {
  const sortedPosts = [...posts].sort((a, b) => {
    if (a.frontmatter.popular) return -1;
    else if (b.frontmatter.popular) return 1;
    else return 0;
  });

  return (
    <>
      {sortedPosts.map((post) => (
        <IndividualToneTag
          key={post.url}
          url={post.url}
          tag={post.frontmatter.tag}
          fullForm={post.frontmatter.fullForm}
        />
      ))}
    </>
  );
};
