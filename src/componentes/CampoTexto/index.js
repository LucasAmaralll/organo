// Importa o estilo CSS associado ao componente
import './CampoTexto.css';

// Define o componente funcional CampoTexto
function CampoTexto(props) {
    // Retorna a estrutura JSX do componente
    return (
        // Define uma div com a classe 'campo-texto' para aplicar estilos
        <div className="campo-texto">
            
            {/* Rótulo (label) associado ao campo de texto */}
            <label>
                {props.label}
            </label>
            
            {/* Campo de entrada de texto (input) com o placeholder baseado na propriedade 'placeholder' */}
            <input placeholder={props.placeholder} />
        </div>
    );
}

// Exporta o componente CampoTexto para ser utilizado em outros arquivos
export default CampoTexto;
