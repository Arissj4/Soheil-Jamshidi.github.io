import Header from "./components/Header";

export default function Home() {
  const user: string = "Soheil Jamshidi";

  return (
    <div className="flex flex-col flex-1 items-center px-10 bg-zinc-50 font-sans dark:bg-black">
      <main className="max-w-280 w-full mx-auto">
        <Header user={user} />
      </main>
    </div>
  );
}
