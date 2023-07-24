import blogList from '~/blog-list.json';
import { BlogListItem } from '~components/Blog';

export function Blog() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto">
        {blogList.map((blogItem) => (
          <BlogListItem title={blogItem.title} brief={blogItem.brief} />
        ))}
      </div>
    </main>
  );
}
