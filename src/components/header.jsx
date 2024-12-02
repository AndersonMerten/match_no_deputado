
import { Menubar } from 'primereact/menubar';
import React, { useState } from 'react';
import "primereact/resources/themes/viva-dark/theme.css";
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Text } from '@chakra-ui/react';

const Header = () => {
    const [viewProposta, setViewProposta] = useState(false);

    const itens = [
        {
            label: "hello",
            icon: "pi pi-home"
        },
        {
            label: "hello",
            icon: "pi pi-star"
        },
        {
            label: "hello",
            icon: "pi pi-search"
        },
        {
            label: "hello",
            icon: "pi pi-bolt"
        },
        {
            label: "hello",
            icon: "pi pi-server"
        },
    ];



    const start = <img src="images/logo_olho_branco.png" alt='logo' height="70" className="mr-2" />

    const end = <Button label="Mais sobre o projeto" severity="secondary" raised onClick={() => setViewProposta(true)} />
 
    return (
        <div className='card' >
            <Menubar model={itens} start={start} end={end} />
            <Dialog visible={viewProposta} style={{ width: '50vw' }} onHide={() => {if (!viewProposta) return; setViewProposta(false); }}>
                <Text textAlign={'justify'}>
                <h1>Início: O Propósito do Projeto</h1>
                <p>
                    Vivemos em uma época em que a transparência política é essencial para o fortalecimento da democracia. Pensando nisso, criamos um site inovador que permite aos cidadãos acompanharem as votações dos deputados federais na Câmara e compararem as decisões deles com as suas próprias opiniões. A plataforma busca facilitar o entendimento sobre como cada representante atua nos temas que moldam nosso país, promovendo mais proximidade entre eleitores e seus eleitos.
                </p>

                <h1>Meio: As Complexidades Envolvidas</h1>
                <p>
                    Apesar do propósito claro, o projeto enfrenta desafios significativos. Um dos maiores obstáculos é a própria dinâmica das votações no Congresso. Muitas vezes, um único tema é debatido e votado em várias etapas, como emendas, destaques e redações finais, tornando difícil consolidar uma única posição sobre o assunto. Além disso, o fenômeno dos "tatus" — propostas ou alterações desconexas adicionadas a projetos maiores — pode gerar interpretações ambíguas. Um deputado pode votar "sim" em um projeto por concordar com o tema principal, mesmo discordando de trechos específicos, ou vice-versa.
                    </p>
                    <p>
                    Essas nuances tornam complexo criar uma ferramenta que represente fielmente as posições dos parlamentares e as compare de forma justa com as opiniões dos usuários. Nosso trabalho envolve interpretar dados legislativos, categorizar votações e fornecer explicações claras para que os usuários entendam o contexto de cada decisão.
                </p>
                <h1>Fim: O Que o Usuário Deve Considerar</h1>
                <p>
                    Ao usar o site, é importante que o usuário tenha em mente que as votações parlamentares são muitas vezes multifacetadas. A concordância ou discordância em relação a um tema pode não refletir necessariamente toda a postura de um deputado em questões correlatas. Assim, é fundamental não apenas considerar as comparações apresentadas pela plataforma, mas também buscar se informar sobre os contextos das votações e as justificativas de cada parlamentar.
                </p>
                <p>
                    Nosso objetivo não é fornecer respostas prontas, mas sim criar um espaço que incentive o pensamento crítico e a participação cidadã. Com isso, esperamos fortalecer a relação entre representantes e representados, promovendo uma política mais transparente e alinhada com os valores da sociedade.
                </p>
            </Text>
            </Dialog>
        </div>
    )
}

export default Header;