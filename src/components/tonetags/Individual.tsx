export interface Props {
  tag: string;
  fullForm: string;
  url: string;
}

export const IndividualToneTag = ({ tag, fullForm, url }: Props) => {
  return (
    <a
      href={url}
      rel="prefetch"
      className="flex flex-col gap-y-3  hover:bg-neutral-800 rounded-md p-4 text-neutral-700 dark:text-neutral-300 transition-colors duration-200 ease-in-out"
    >
      <h3 className="text-xl text-uwu md:text-2xl font-extrabold">{tag}</h3>

      <p className="text-sm md:text-base font-medium">{fullForm}</p>
    </a>
  );
};
