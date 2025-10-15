import React from "react";

const Header = () => {
  return (
    <div className="bg-[color:var(--color-lightcream)] text-[color:var(--color-lightcream)]">
      <header className="bg-[color:var(--color-brickred)] p-6 text-white">
        <p className="text-2xl font-bold">Welcome</p>
        <p>text</p>
      </header>

      <main className="p-6">
        <p className="text-lg">
          This section uses your custom foreground and background colors.
        </p>
        <button className="mt-4 px-4 py-2 bg-[color:var(--color-ochre)] text-white rounded">
          Click Me
        </button>
      </main>

      <footer className="bg-[color:var(--color-brickred)] text-white p-4 mt-10 text-center">
        Footer Content
      </footer>
    </div>
  );
};

export default Header;
