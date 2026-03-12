import { Cpu, ShieldCheck, ArrowRight, Upload } from 'lucide-react';
export default function Home() {
  return (
    <div className="bg-[#002B49] text-white min-h-screen font-sans">
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-black italic text-[#008080]">YOLP.</div>
        <button className="bg-[#008080] px-6 py-2 rounded-full font-bold">Login</button>
      </nav>
      <main className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h1 className="text-7xl font-black mb-6 leading-tight">Your Own <br/><span className="text-[#008080]">Logistics Partner.</span></h1>
        <p className="text-xl text-blue-100/60 mb-12 max-w-2xl mx-auto">AI-powered document auditing. Detect risks in shipping documents instantly.</p>
        <div className="bg-white/5 border-2 border-dashed border-white/20 p-20 rounded-[3rem] max-w-3xl mx-auto">
           <Upload className="mx-auto text-[#008080] mb-4" size={48} />
           <h2 className="text-2xl font-bold">Drop your Bill of Lading here</h2>
           <p className="text-blue-100/40 mt-2">PDF or Images accepted</p>
        </div>
      </main>
    </div>
  );
}
