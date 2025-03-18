import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link href="/"><a className="hover:text-gray-400">Home</a></Link>
        <Link href="/about"><a className="hover:text-gray-400">About</a></Link>
        <Link href="/projects"><a className="hover:text-gray-400">Projects</a></Link>
      </div>
    </nav>
  );
}
