import Image from "next/image";
import Honeypages from "./Components/Honeypages";
import Honepagestwo from "./Components/Honepagestwo";
import Description from "./Components/Description";
import Providerservice from "./Components/Providerservice";
import Ourservice from "./Components/Ourservice";
import Ourrecentworks from "./Components/Ourrecentworks";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="max-w-full">
      <Honeypages />
      <Honepagestwo />
      <Description />
      <Providerservice />
      <Ourservice />
      <Ourrecentworks />
      <Contactus/>
      <Footer/>
    </main>
  );
}
