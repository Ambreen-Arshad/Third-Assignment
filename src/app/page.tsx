import Navbar from "./component/navbar";
import Hero from '@/app/component/hero';
import Worktogether from "./component/worktogether";
import Extension from "./component/extension";
import Costamise from "./component/costamise";
import Yourwork from "./component/yourwork";
import Sponser from "./component/sponser";
import Footer from "./component/footer";

export default function Home (){
  return(
       <>
       <div>
        <Navbar />
        <Hero />
        <Worktogether />
        <Extension />
        <Costamise />
        <Yourwork />
        <Sponser />
        <Footer />
       </div>
       </>
  );
} 