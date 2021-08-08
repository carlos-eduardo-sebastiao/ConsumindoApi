const cep = document.getElementById('cep').value;
const url = `https://viacep.com.br/ws/${cep}/json/`;

const preencherFormulario = (value) => {
    const valores = value.then((valor) => {
        let road = document.getElementById('road').value = valor.logradouro;
        let district = document.getElementById('district').value = valor.bairro;
        let city = document.getElementById('city').value = valor.localidade;
    })
}

const pesquisarCep = () => {
    const dados = fetch(url);
    const endereco = dados.then( value => value.json());
    endereco.then(preencherFormulario(endereco));
    endereco.catch(
        window.alert('CEP não encontrado!')
    )
}

    document.getElementById('cep').addEventListener('focusout', pesquisarCep);