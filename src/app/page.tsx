import Sections from "@/components/Sections";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      className={`w-full relative snap-mandatory snap-both overscroll-contain`}
    >
      <Header />
      <Sections />
    </div>
  );
}
