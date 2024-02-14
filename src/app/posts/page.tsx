import PostListItem from "@/components/post-list";

export default async function PostPages() {
    const response = await fetch('https://dummyjson.com/posts?limit=5');
    const data = await response.json();
    return (
        <main className="text-center pt-16 px-5">
          <h1 className="text-5xl font-semibold mb-7">All posts</h1>
          <PostListItem posts={data.posts} />
        </main>
      );
}