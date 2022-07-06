import Tema from "./tema";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema | null;
    // usuario?: Usuario | null;
}
export default Postagem;