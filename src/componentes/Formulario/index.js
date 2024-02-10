// Importa os componentes necessários
import Botao from '../Botao';
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

  // Função chamada ao salvar o formulário
  function aoSalvar(evento) {
    // Impede o comportamento padrão do formulário (recarregar a página) e exibe uma mensagem no console
    return (
      evento.preventDefault(),
      console.log('Form foi submetido')
    );
  }
  
  // Retorna a estrutura JSX do componente
  return (
    // Define uma seção com a classe 'formulario' para aplicar estilos
    <section className='formulario'>
      
      {/* Cria um formulário para coletar dados, com a chamada à função 'aoSalvar' no evento 'onSubmit' */}
      <form onSubmit={aoSalvar}>
        
        {/* Título do formulário */}
        <h2>Preencha os dados da(s) pessoa(s) que deseja adicionar na sua árvore genealógica</h2>
        
        {/* Componente CampoTexto para o nome, com a propriedade 'obrigatorio' definida como true */}
        <CampoTexto obrigatorio={true} label="Name" placeholder="Digite o nome completo" />
        
        {/* Componente CampoTexto para a imagem */}
        <CampoTexto label="Image" placeholder="Digite o endereço de imagem" />
        
        {/* Componente CampoTexto para o grau de parentesco, com a propriedade 'obrigatorio' definida como true */}
        <CampoTexto obrigatorio={true} label="Degree of kinship" placeholder="Digite o grau de parentesco"/>
        
        {/* Componente CampoTexto para o estado e país de nascimento, com a propriedade 'obrigatorio' definida como true */}
        <CampoTexto obrigatorio={true} label="State and country of birth" placeholder="Digite o estado e país de nascimento"/>
        
        {/* Componente ListaSuspensa para selecionar o grau de parentesco, com a propriedade 'obrigatorio' definida como true */}
        <ListaSuspensa obrigatorio={true} label="Kinship" itens={times}/>

        {/* Componente Botao para salvar o formulário */}
        <Botao>
            Salvar
        </Botao>
      
      </form>
    </section>
  );
}

// Exporta o componente Formulario para ser utilizado em outros arquivos
export default Formulario;
