import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 via-white to-pink-200 py-16">
      
      {/* Top decorative header */}
      <div className="flex items-center gap-3 text-2xl font-semibold text-pink-600 mb-6 animate-bounce">
        🌺 🌸 🌼 Welcome to My Personal Site 🌼 🌸 🌺
      </div>

      <Image
        src="/profile.jpg"
        alt="Profile"
        width={250}
        height={250}
        className="rounded-full shadow-lg border-4 border-pink-300 hover:scale-105 transition-transform duration-300"
      />

      <h1 className="text-4xl font-extrabold mt-8 text-pink-700 tracking-wide">
        🌸 Welcome to My Portfolio 🌸
      </h1>

      <p className="mt-4 text-lg text-gray-700 max-w-xl text-center">
        Hi, I'm <strong>Ruman Fatima</strong> — a passionate student of Artificial Intelligence (AI).  
        I love exploring how intelligent systems can make life smarter, easier, and more creative.
      </p>
    </div>
  );
}
