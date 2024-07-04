import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialPosts: Prisma.PostCreateInput[] = [
  {
    title: "Prisma is awesome",
    slug: "prisma-is-awesome",
    content: "https://www.prisma.io/",
    published: true,
    author: {
      connectOrCreate: {
        where: { email: "lihua@qq.com" },
        create: {
          name: "Lihua",
          email: "lihua@qq.com",
          password: "123456ssss",
        },
      },
    },
  },
];
async function main() {
  console.log(`Start seeding ...`);
  for (const post of initialPosts) {
    const newPost = await prisma.post.create({
      data: post,
    });
    console.log(`Created post:${newPost.title}`);
  }
  console.log(`Seeding finished.`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
