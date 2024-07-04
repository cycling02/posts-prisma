import { prisma } from "@/prisma/client";
import React from "react";
// ddddd
const NewPost = async ({ params }: { params: { slug: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center'>
      <h1 className='text-2xl text-sky-600 font-semibold'>
        title:{post?.title}
      </h1>

      <p className='text-2xl text-sky-600'>content:{post?.content}</p>
    </div>
  );
};

export default NewPost;
