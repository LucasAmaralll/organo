// Importa os componentes necessários
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

// Define o componente Funcional Formulario
function Formulario() {
  
  // Array de opções para a ListaSuspensa
  const times = [
    '1º Grau',
    '2º Grau',
    '3º Grau',
    '4º Grau'
  ];
  
  // Retorna a estrutura JSX do componente
  return (
    // Define uma seção com a classe 'formulario' para aplicar estilos
    <section className='formulario'>
      
      {/* Cria um formulário para coletar dados */}
      <form>
        
        {/* Título do formulário */}
        <h2>Preencha os dados da(s) pessoa(s) que deseja adicionar na sua árvore genealógica</h2>
        
        {/* Componente CampoTexto para o nome */}
        <CampoTexto label="Name" placeholder="Digite o nome completo" />
        
        {/* Componente CampoTexto para a imagem */}
        <CampoTexto label="Image" placeholder="Digite o endereço de imagem" />
        
        {/* Componente CampoTexto para o grau de parentesco */}
        <CampoTexto label="Degree of kinship" placeholder="Digite o grau de parentesco"/>
        
        {/* Componente CampoTexto para o estado e país de nascimento */}
        <CampoTexto label="State and country of birth" placeholder="Digite o estado e país de nascimento"/>
        
        {/* Componente ListaSuspensa para selecionar o grau de parentesco */}
        <ListaSuspensa label="Kinship" itens={times}/>
      
      </form>
    </section>
  );
}

// Exporta o componente Formulario para ser utilizado em outros arquivos
export default Formulario;
