import { Game } from "@/components/game/game";
import Header from "@/components/header/header";
import { Typer } from "@/components/typer/typer";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container mx-auto max-w-[1000px]">
        <Typer />
        {/* <Game /> */}
      </div>
    </main>
  );
}
