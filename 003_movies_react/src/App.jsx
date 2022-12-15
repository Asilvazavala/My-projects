import { MoviesGrid } from "./components/MoviesGrid/MoviesGrid";
import "./App.css"

export function App() {
    return (
    <div>
        <header>
            <h1 className="tittle">My Movies</h1>
        </header>
        <main>
           <MoviesGrid />
        </main>
    </div>
    );
}

