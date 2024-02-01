import CampoTexto from '../CampoTexto'
import './Formulario.css'

function Formulario() {
  return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados da(s) pessoa(s) que deseja adicionar na sua árvore genealógica</h2>
                <CampoTexto label="Name" placeholder="Digite o nome completo" />
                <CampoTexto label = "Image" placeholder = "Digite o endereço de imagem" />
                <CampoTexto label="Degree of kinship" placeholder="Digite o grau de parentesco"/>
                <CampoTexto label="State and country of birth" placeholder="Digite o estado e país de nascimento"/>
            </form>
        </section>
  )
}

export default Formulario;
