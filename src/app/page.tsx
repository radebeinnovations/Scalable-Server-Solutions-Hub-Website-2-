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
<<<<<<< HEAD
          <div className="flex flex-col md:flex-row items-center gap-8 text-[11px] font-mono uppercase tracking-widest">
            <a href="https://www.paletech.co.za/" target="_blank" rel="noopener noreferrer" className="group text-secondary flex items-center gap-2 hover:text-primary transition-all">
              <span className="text-gray-500">FOR MORE, VISIT</span>
              <span className="font-bold underline decoration-secondary group-hover:decoration-primary">PALETECH</span>
            </a>
            <div className="flex gap-8 text-gray-600">
              <a href="#" className="hover:text-primary transition-colors">/ Term_Of_Service</a>
              <a href="#" className="hover:text-primary transition-colors">/ Privacy_Policy</a>
            </div>
=======
          <div className="flex gap-8 text-[10px] text-gray-600 font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">/ Term_Of_Service</a>
            <a href="#" className="hover:text-primary transition-colors">/ Privacy_Policy</a>
>>>>>>> 89f9e1030ac04799351439139ca174b175edbafb
          </div>
        </div>
      </footer>
    </main>
  );
}
