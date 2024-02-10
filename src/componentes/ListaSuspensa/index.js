// Importa o estilo CSS para este componente
import './ListaSuspensa.css';

// Define a função ListaSuspensa, que recebe props como argumento
function ListaSuspensa(props) {
    // Imprime os itens recebidos como propriedade no console
    console.log(props.itens);

    // Retorna a estrutura JSX do componente
    return (
        // Define uma div com a classe 'lista-suspensa' para aplicar estilos
        <div className='lista-suspensa'>
            
            {/* Exibe o rótulo da lista suspensa */}
            <label>{props.label}</label>

            {/* Cria um elemento de seleção (dropdown) e mapeia os itens para opções */}
            <select required={props.required}>
                {/* Mapeia os itens recebidos como propriedade para elementos de opção dentro do elemento de seleção. Cada opção recebe uma chave única (`key`) com base no item. */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

// Exporta o componente ListaSuspensa para ser utilizado em outros lugares
export default ListaSuspensa;
