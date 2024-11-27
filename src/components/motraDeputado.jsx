import { useEffect, useState } from "react";
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'

const MostraDeputado = () => {

    const [deputado, setDeputado] = useState(null);

    useEffect(() => {
        fetch('https://dadosabertos.camara.leg.br/api/v2/deputados/220593', {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }).then(data => {
            if (!data) {
                throw new Error("O link indicado não foi encontrado no servidor, por favor verifique com o suporte!");
            }
            return data.json();
        }).then(res => {
           setDeputado(res.dados);
        })
    }, [])

    const trataData = (tratar) =>{
        const data = new Date(tratar);
        const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        const dia = data.getDay();
        const mes = meses[data.getMonth()];
        const ano = data.getFullYear();
        return (dia + " de " + mes +" de " + ano)
    }

    const sexoDeputado = () =>{
        return(deputado.sexo === "F") ? "a": "o";
    }

    const converteCamelCase = (texto) =>{
        var resultado = "";
        if (texto){
            resultado =  texto.split(" ").map((palavra) =>{               
            palavra = palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
            return palavra;
            })
        }else{
            return " ";
        }        

        return resultado.toString().replaceAll(","," ");
    }

    return (  
        <div className="mostraDeputado">
        {!deputado && <h1> carregando dados</h1>}
        {deputado &&  (
            <Card 
                direction={{base: 'column', sm: "row"}}
                overflow={"hidden"}
                variant={"outline"}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={deputado.ultimoStatus.urlFoto}
                    alt='Foto do parlamentar'/>
                <Stack>
                    <CardBody>
                        <Heading>{deputado.ultimoStatus.nomeEleitoral}</Heading>
                        <Text py={2}>
                            {converteCamelCase(deputado.nomeCivil)}, conhecid{sexoDeputado()} como {deputado.ultimoStatus.nomeEleitoral}, nasceu em {trataData(deputado.dataNascimento)} no municipio de {deputado.municipioNascimento} - {deputado.ufNascimento}.
                            Com formação {deputado.escolaridade} completa, foi eleit{sexoDeputado()} deputad{sexoDeputado()} federal em {trataData(deputado.ultimoStatus.data)},   filiad{sexoDeputado()} ao {deputado.ultimoStatus.siglaPartido}.                            
                            {converteCamelCase()}
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        )}
        
        </div>

       



    );

}
 
export default MostraDeputado;