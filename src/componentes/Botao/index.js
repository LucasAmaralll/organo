// Importa o estilo CSS associado ao componente
import './Botao.css';

// Define o componente funcional Botao
function Botao(props) {
    // Retorna a estrutura JSX do componente, utilizando a classe 'botao'
    return (
        <button className='botao'>
            {/* Renderiza o conteúdo interno do botão, passado como children através das props */}
            {props.children}
        </button>
    );
}

// Exporta o componente Botao para ser utilizado em outros arquivos
export default Botao;
