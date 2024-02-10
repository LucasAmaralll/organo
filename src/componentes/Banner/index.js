// Importa o estilo CSS associado ao componente
import './banner.css';

// Define o componente funcional Banner
function Banner() {
    // Retorna a estrutura JSX do componente
    return (
        // Define um cabeçalho com a classe 'banner' para aplicar estilos
        <header className="banner">
            
            {/* Imagem do banner com caminho relativo */}
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
        </header>
    );
}

// Exporta o componente Banner para ser utilizado em outros arquivos
export default Banner;
