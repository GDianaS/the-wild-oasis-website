// HOME PAGE
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png"; //permite que não se precise especificar o height e width em <Image/>

export default function Page() {
  return(
    <main className="mt-24">
      {/* <img
        src="/bg.png"
        alt="Mountains and forests with two cabins"
      /> */}
      <Image 
        src={bg}
        placeholder="blur"
        quality={80}
        fill className="object-cover object -top" //preenche todo o elemento (main) 
        alt="Mountains and forests with two cabins"/>
      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">Welcome to paradise</h1>
        <Link 
          href="/cabins" 
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all">
        Explore luxury cabins
        </Link>
      </div>

    </main>
        
  );
}
