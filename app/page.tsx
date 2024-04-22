import Header from "@/components/Header";
import Footer from "@/components/organism/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="h-fit items-center mt-16 px-20 z-0">
        <section className="h-screen border border-blue-600 w-full"></section>
        <section className="h-screen border border-orange-500 w-full"></section>
      </main>
      <Footer />
    </div>
  );
}
