import { prisma } from "@/prisma/client";
import Link from "next/link";
import React from "react";
import { createPost } from "../actions/action";

const PostPage = async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: "lihua@qq.com",
    },
    include: {
      posts: true,
    },
  });
  return (
    <div className='flex w-screen h-screen justify-center m-10 '>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='flex font-semibold text-3xl'>
          All posts({user?.posts.length})
        </h1>
        <br />

        <ul className='border-b border-t border-cyan-600 h-auto'>
          {user?.posts.map((post) => (
            <li key={post.id} className='flex font-semibold text-2xl'>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <form
          action={createPost}
          className='flex flex-col w-[300px] gap-2 mt-20'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            className='border border-sky-400'
          />
          <textarea
            name='content'
            placeholder='Content'
            className='border border-sky-500'></textarea>
          <button type='submit' className='bg-blue-500 text-black p-2'>
            创建post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostPage;
