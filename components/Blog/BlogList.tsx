import { blogs } from "./Blogs";
import Link from "next/link";

const BlogList = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-6xl text-center">From the Ring</h2>
          <p className="mt-2 text-lg leading-8 text-center">
            Blog posts from YGK Boxing
          </p>
          <div className="mt-10 space-y-8 pt-10 sm:mt-8 sm:pt-8">
            {blogs.map((post) => (
              <article key={post.id}
              >
                <Link href={`/blog/post/${post.id}`}
                      className="flex max-w-xl flex-col bg-gray-900 items-start justify-between border border-white p-6 rounded-lg hover:border-blue-700">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime}>
                      {post.datetime}
                    </time>

                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6">
                      <span className="absolute inset-0" />
                      {post.title}
                    </h3>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */}
                    <p className="mt-5 line-clamp-3 text-sm leading-6">{post.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;