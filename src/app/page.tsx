import Header from "./components/Header";
import { User } from "./types/User";

export default function Home() {
  const user: User = {
    name: "Soheil Jamshidi",
    title: "Full-Stack Developer",
    city: "Torino",
    email: "soheil.jamshidi.4@gmail.com",
  };

  return (
    <div className="flex flex-col flex-1 items-center px-10 bg-zinc-50 font-sans dark:bg-black">
      <main className="max-w-280 w-full mx-auto gap-24">
        <Header user={user} />

        <section className="gap-7">
          <div></div>
        </section>
      </main>
    </div>
  );
}
