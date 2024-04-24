import { json, type MetaFunction } from "@remix-run/node";
// import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/data";

export const meta: MetaFunction = () => {
  return [
    { title: "theenk" },
    { name: "description", content: "Des créations responsables et durables" },
  ];
};

export const loader = async () => {
  const { data } = await getPosts();
  return json({ posts: data.posts });
};

export default function Index() {

  // const { posts } = useLoaderData<{ posts: [] }>();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-8 xl:px-16 pt-12 sm:pt-20 md:pt-32">
      <h1 className="mb-14 text-4xl font-normal text-dark sm:text-5xl lg:w-full xl:text-6xl">Des créations responsables & durables.</h1>
      {/* <ul>
        {posts.map((post: { id: string, title: string, coverImage: { id: string, fileName: string, url: string } }) => (
          <li key={post.id}>
            <article>
              <header>
                <h2><Link to={
                  {
                    pathname: `/posts/${post.id}`
                  }
                }>{post.title}</Link></h2>
              </header>
              <img src={post.coverImage.url} alt={post.coverImage.fileName} width="150" height="150" />
            </article>
          </li>
        ))}
      </ul> */}
      <section className="mt-12 sm:mt-24">
        <h2 className="relative border-b py-3 text-xl before:absolute before:inset-x-0 before:bottom-0 before:h-px before:origin-right before:scale-x-0 before:bg-primary before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100 inline-block text-gray-600 font-serif">Product Design</h2>
        <ul className="my-24 mx-auto px-2 sm:px-4 lg:px-4 xl:max-w-7xl xl:gap-x-24 xl:px-0 2xl:max-w-[90rem]">
          <li>
          </li>
        </ul>
      </section>

      <section className="mt-12 sm:mt-24">
        <h2 className="relative border-b py-3 text-xl before:absolute before:inset-x-0 before:bottom-0 before:h-px before:origin-right before:scale-x-0 before:bg-primary before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100 inline-block text-gray-600 font-serif">Développement d'Applications</h2>
      </section>

      <section className="mt-12 sm:mt-24">
        <h2 className="relative border-b py-3 text-xl before:absolute before:inset-x-0 before:bottom-0 before:h-px before:origin-right before:scale-x-0 before:bg-primary before:transition before:duration-300 hover:before:origin-left hover:before:scale-x-100 inline-block text-gray-600 font-serif">Marketing Digital</h2>
      </section>
    </main>
  );
}
