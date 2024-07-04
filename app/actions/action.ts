"use server";

import { prisma } from "@/prisma/client";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createPost(formdata: FormData) {
  try {
    await prisma.post.create({
      data: {
        title: formdata.get("title") as string,
        slug: (formdata.get("title") as string)
          .replace(/\s+/g, "-")
          .toLowerCase(),
        content: formdata.get("content") as string,
        author: {
          connect: {
            email: "lihua@qq.com",
          },
        },
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log("email already exists");
      }
    }
  }

  revalidatePath("/posts");
}
