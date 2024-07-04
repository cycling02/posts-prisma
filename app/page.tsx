import Link from "next/link";

export default function Home() {
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1>Home Page</h1>

        <Link href='/posts'>
          <p className='flex text-2xl text-sky-500'>Go to post page</p>
        </Link>
      </div>
    </div>
  );
}
