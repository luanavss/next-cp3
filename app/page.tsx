import Image from "next/image";
import Cardfilm from "../Components/Cardfilm";

export default function Home() {
  return (
    <main className="flex-auto">
      <Cardfilm 
      title="Jujutsu Kaisen"
      Image={"/jjk.jpg"}
      link= "https://www.youtube.com/watch?v=iVmcufvaO3M&pp=ygUOanVqdXRzdSBrYWlzZW4%3D"/>
      Conteudo da pagina
    </main>
  )
}

