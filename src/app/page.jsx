import Image from "next/image";
import Honeypages from "./Components/Honeypages";
import Honepagestwo from "./Components/Honepagestwo";
import Description from "./Components/Description";

export default function Home() {
  return (
    <main className="max-w-full">
      <Honeypages />
      <Honepagestwo />
      <Description />
    </main>
  );
}
