import Header from "./components/Header";
import { User } from "./types/User";

export default function Home() {
  const user: User = {
    name: "Soheil Jamshidi",
    title: "Full-Stack Developer",
    city: "Torino",
    email: "soheil.jamshidi.4@gmail.com",
    introduction: "I build fast, accessible interfaces with React and Next.js.",
    desirre: "Open to Front-End and Junior Full-Stack roles. I turn ideas into working products, from the interface to the API behind it.v",
  };

  return (
    <div className="flex flex-col flex-1 items-center px-10 bg-zinc-50 font-sans dark:bg-black">
      <main className="max-w-280 w-full flex flex-col mx-auto gap-24">
        <Header user={user} />

        <section className="flex flex-col gap-7">
          <div id="user-title-city" className="text-[13px] text-[#7cf5c8] tracking-[2px] uppercase">
            {user.title} · {user.city}
          </div>

          <h1 className="m-0 font-heading text-[72px]/[1.02] font-bold">
            {user.introduction}
          </h1>

          <p className="max-w-160 m-0 text-[19px]/[1.6] text-[#a1aab3]">
            {user.desirre}
          </p>
        </section>
      </main>
    </div>
  );
}
