import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/data";

export const loader = async ({
  params: { id },
}: {
  params: { id: string };
}) => {

  const { data } = await getPost(id);
  return json({ post: data.post });
};



export default function Page() {

  const { post } = useLoaderData<{ post: { title: string, content: string, coverImage: { url: string, fileName: string } } }>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <article>
        <header><h1>{post.title}</h1></header>
        <div>
          <img src={post.coverImage.url} alt={post.coverImage.fileName} width="150" height="150" />
        </div>
        <p>{post.content}</p>
      </article>

    </div>
  );
}
