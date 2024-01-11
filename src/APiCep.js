import { SwalAlert, toastAlert } from "./menuCar.js";

export async function getAddress(cep) {
    
    try {
    
    cep = cep.replace('.', '').replace('-', '');
    if(cep===''){
        var msg = 'Informe o CEP!'
        throw new Error(msg)
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`
        const response = await fetch(url);
        const adress = await response.json();
        if (adress.erro) {
            var msg = 'Cep inválido!'
            throw new Error(msg)
        }
        let blockMsg = document.getElementById('blockMsgCep');

        blockMsg.innerHTML = ''
        blockMsg.innerHTML = `
            <p id="getApiCep"></p>
            <p id="msgCep"></p>`

        let dataCep = document.getElementById('getApiCep');
        let msgCep = document.getElementById('msgCep');

        dataCep.innerText = `${adress.logradouro} - ${adress.bairro} - ${adress.localidade}/${adress.uf}`;
        let valor;
        switch (adress.localidade) {
            case 'Criciúma':
                valor = 'Chegará gratis quarta feira'
                msgCep.style.color ='#2c8d2c'
                break;
            case 'Içara':
                valor = 'Chegará quarta feira por R$25,00'
                break;
            case 'Florianópolis':
                valor = 'Chegará quarta feira por R$35,00'
                break;
            default:
                valor = 'Chegará quarta feira por R$45,00'
                break;
        }
        msgCep.innerText = valor
        }catch (error) {
            SwalAlert('error','Campo não preenchido', error.message,2000,true,false)
        }
    }
