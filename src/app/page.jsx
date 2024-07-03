import Image from "next/image";
import Honeypages from "./Components/Honeypages";
import Honepagestwo from "./Components/Honepagestwo";

export default function Home() {
  return (
    <main className="max-w-full">
      <Honeypages />
      <Honepagestwo />
    </main>
  );
}
