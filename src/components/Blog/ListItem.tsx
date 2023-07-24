type Props = {
  title: string;
  brief: string;
};

export function BlogListItem({ title, brief }: Props) {
  return (
    <article className="mb-4">
      <h3 className="text-2xl">{title}</h3>
      <p>{brief}</p>
    </article>
  );
}
