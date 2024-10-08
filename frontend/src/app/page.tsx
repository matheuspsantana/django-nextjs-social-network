import Link from "next/link";

export default function PageHome() {

  return (
      <main>
         <h1 className="text-blue-500">Im blue!</h1>
         <p>Not adding the lusitana classname</p>
         <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">Adding the lusitana classname</p>
         <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"/>
        <Link href='/login'>login page</Link>
      </main>
  );
}
