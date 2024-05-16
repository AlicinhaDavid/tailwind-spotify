import { HomeIcon, Search, Library } from "lucide-react";
export default function Home() {
  return (
    <div className="h-screen flex flex-col"> 
     <div className="flex flex-1">
       <aside className="w-72 bg-zinc-950 p-6">
         <nav className="space-y-5">
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <HomeIcon />
            Home
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Search />
            Search
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Library />
            Your Library
          </a>
         </nav>

         <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">ABBA</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Jazz & Blues</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Workout Playlist</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Driving my neighbors crazy</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Credance</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Metalica</a>

         </nav>
       </aside>      
       <main className="flex-1 p-6">
         main
       </main>
     </div>
     <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
       footer
     </footer>
    </div>
  );
}
