export default function Header({ user }: { user: string }) {
  return (
    <>
      <header className="w-full flex flex-wrap justify-between py-6 border-b border-[#232a31]">
        <div className="min-w-fit">
          <h4>
            <a
              href="#"
              className="text-xl font-[700px] text-[#e9ecef] hover:text-[#a1aab3]"
            >
              {user}
            </a>
            a
          </h4>
        </div>

        <div>
          <nav className="flex gap-6 text-[#a1aab3]">
            <a href="#projects" className="hover:text-[#e9ecef]">
              Projects
            </a>

            <a href="#experience" className="hover:text-[#e9ecef]">
              Experience
            </a>

            <a href="#stack" className="hover:text-[#e9ecef]">
              Stack
            </a>

            <a href="#contact" className="hover:text-[#e9ecef]">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
