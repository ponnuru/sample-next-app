import Link from "next/link";

type Post = {
    id: string,
    title: string
}
type PostListProps = {
    posts: Post[];
};
export default function PostListItem({posts}: PostListProps) {
    return (
      <ul>
        {
            posts.map((post )=> (
                <li key={post.id} className="max-w-[400px] mb-3 mx-auto">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            ))
        }
      </ul>
    );

}