import Link from "next/link";

const Footer = () => (
  <footer className="mt-24 border-t border-white/10 bg-black/50">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
      <p>&copy; {new Date().getFullYear()} PulseMinds AI. Crafted for viral emotional intelligence.</p>
      <div className="flex gap-4">
        <Link href={{ pathname: "/", hash: "features" }}>Features</Link>
        <Link href={{ pathname: "/", hash: "stack" }}>Stack</Link>
        <Link href={{ pathname: "/", hash: "marketing" }}>Marketing</Link>
        <Link href={{ pathname: "/", hash: "publishing" }}>Play Store Launch</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
