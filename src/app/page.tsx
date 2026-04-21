import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Infrastructure from "@/components/Infrastructure";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Infrastructure />
      <Pricing />
      <Contact />
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} SSSH_SYSTEMS_GLOBAL. VER: 4.0.2_STABLE
          </div>
          <div className="flex gap-8 text-[10px] text-gray-600 font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">/ Term_Of_Service</a>
            <a href="#" className="hover:text-primary transition-colors">/ Privacy_Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
