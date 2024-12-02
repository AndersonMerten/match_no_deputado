import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { useRef, useState } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { Text, Heading } from '@chakra-ui/react';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog';

const Votacao = () => {

    const stepRef = useRef(null);
    const toast = useRef(null);

    const [visible, setVisible] = useState(false);
    const [dialogContent, setDialogContent] = useState([]);
    const [voto, setVoto] = useState('');
    const [votacao, setVotacao] = useState(["", "", "", "", ""])
    const [titulos, setTitulos] = useState(["blusinha", "calcinha", "correntinha", "cuequinha", "bermudinha"])


    const inputVotacao = () => {
        return (
            <div style={{ display: "flex", margin: "auto", flexDirection: "row", gap: "20px" }}>
                <div >
                    <RadioButton inputId="Afavor" name="A favor" value="A favor" onChange={(e) => setVoto(e.value)} checked={voto === 'A favor'} style={{ marginRight: "8px" }} />
                    <label htmlFor="Afavor" className="ml-2">A favor    </label>
                </div>
                <div >
                    <RadioButton inputId='contra' value="contra" name='contra' onChange={(e) => setVoto(e.value)} checked={voto === "contra"} style={{ marginRight: "8px" }} />
                    <label htmlFor="contra" className="ml-2">Contra</label>
                </div>
                <div >
                    <RadioButton inputId='nulo' value="nulo" name='nulo' onChange={(e) => setVoto(e.value)} checked={voto === "nulo"} style={{ marginRight: "8px" }} />
                    <label htmlFor="nulo" className="ml-2">Nulo ou Em branco</label>
                </div>

            </div>
        )
    }

    const confirmDialogVotacao = () => {
        return (
            <div>
                {/* ConfirmDialog */}
                <ConfirmDialog
                    visible={visible}
                    onHide={() => setVisible(false)}
                    header="Resumo da Votação"
                    message={
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {dialogContent.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.titulo}:</strong> {item.voto}
                                </li>
                            ))}
                        </ul>
                    }
                    footer={
                        <div>
                            <Button
                                label="Confirmar votação"
                                icon="pi pi-check"
                                onClick={() => {
                                    setVisible(false);
                                    console.log("Votação confirmada");
                                }}
                                autoFocus
                            />
                            <Button
                                label="Cancelar"
                                icon="pi pi-times"
                                className="p-button-text"
                                onClick={() => setVisible(false)}
                            />
                        </div>
                    }
                />
            </div>
        )

    }

    const mudaArrayNoIndex = (index) => {
        const novoArray = votacao.map((e, i) => {
            if (index === i) {
                return voto;
            } else {
                return e;
            }
        });
        setVotacao(novoArray);
    }

    const armazenaVoto = (stepRef) => {
        mudaArrayNoIndex(stepRef.current.getActiveStep());

        if (voto === "") {
            return toast.current.show({ severity: 'warn', summary: 'Warning', detail: 'Você deve selecionar um voto para continuar', life: 3000 });;
        } else {
            setVoto("");
            stepRef.current.nextCallback();
            if (stepRef.current.getActiveStep() === 4) {
                console.log("entrouuuuuu")
                gerarDialogo(votacao, titulos);

            }
        }

    }

    const gerarDialogo = (votos, titulos) => {
        const conteudo = titulos.map((titulo, index) => ({
            titulo,
            voto: votos[index] || "Não votado"
        }));
        setDialogContent(conteudo);

        // Exibe o diálogo
        setVisible(true);
    }

    return (
        <div>
            <Toast ref={toast} />
            {confirmDialogVotacao()}
            <Stepper ref={stepRef} linear>
                <StepperPanel header='Votação número 1' pan>
                    <Fieldset legend={"Imposto das blusinhas"}>
                        <Heading>Projeto de lei blabalbalbalba</Heading>
                        <Text textAlign={'justify'}>
                            Mussum Ipsum, cacilds vidis litro abertis.  Morbi viverra placerat justo, vel pharetra turpis. Mé faiz elementum girarzis, nisi eros vermeio. Sapien in monti palavris qui num significa nadis i pareci latim. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.

                            Quem num gosta di mim que vai caçá sua turmis! Delegadis gente finis, bibendum egestas augue arcu ut est. Manduma pindureta quium dia nois paga. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
                        </Text>
                    </Fieldset>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {inputVotacao()}
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => armazenaVoto(stepRef)} />
                    </div>
                </StepperPanel>

                <StepperPanel header='Votação número 2'>
                    <Fieldset legend={"Imposto das calcinhas"}>
                        <Heading>Projeto de lei blabalbalbalba</Heading>
                        <Text textAlign={'justify'}>
                            Mussum Ipsum, cacilds vidis litro abertis.  Morbi viverra placerat justo, vel pharetra turpis. Mé faiz elementum girarzis, nisi eros vermeio. Sapien in monti palavris qui num significa nadis i pareci latim. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.

                            Quem num gosta di mim que vai caçá sua turmis! Delegadis gente finis, bibendum egestas augue arcu ut est. Manduma pindureta quium dia nois paga. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
                        </Text>
                    </Fieldset>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepRef.current.prevCallback()} />
                        {inputVotacao()}
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => armazenaVoto(stepRef)} />
                    </div>
                </StepperPanel>

                <StepperPanel header='Votação número 3'>
                    <Fieldset legend={"Imposto das cuequinhas"}>
                        <Heading>Projeto de lei blabalbalbalba</Heading>
                        <Text textAlign={'justify'}>
                            Mussum Ipsum, cacilds vidis litro abertis.  Morbi viverra placerat justo, vel pharetra turpis. Mé faiz elementum girarzis, nisi eros vermeio. Sapien in monti palavris qui num significa nadis i pareci latim. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.

                            Quem num gosta di mim que vai caçá sua turmis! Delegadis gente finis, bibendum egestas augue arcu ut est. Manduma pindureta quium dia nois paga. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
                        </Text>
                    </Fieldset>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepRef.current.prevCallback()} />
                        {inputVotacao()}
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => armazenaVoto(stepRef)} />
                    </div>
                </StepperPanel>

                <StepperPanel header='Votação número 4'>
                    <Fieldset legend={"Imposto das correntinhas"}>
                        <Heading>Projeto de lei blabalbalbalba</Heading>
                        <Text textAlign={'justify'}>
                            Mussum Ipsum, cacilds vidis litro abertis.  Morbi viverra placerat justo, vel pharetra turpis. Mé faiz elementum girarzis, nisi eros vermeio. Sapien in monti palavris qui num significa nadis i pareci latim. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.

                            Quem num gosta di mim que vai caçá sua turmis! Delegadis gente finis, bibendum egestas augue arcu ut est. Manduma pindureta quium dia nois paga. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
                        </Text>
                    </Fieldset>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepRef.current.prevCallback()} />
                        {inputVotacao()}
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => armazenaVoto(stepRef)} />
                    </div>
                </StepperPanel>

                <StepperPanel header='Votação número 5'>
                    <Fieldset legend={"Imposto das chinelinhas"}>
                        <Heading>Projeto de lei blabalbalbalba</Heading>
                        <Text textAlign={'justify'}>
                            Mussum Ipsum, cacilds vidis litro abertis.  Morbi viverra placerat justo, vel pharetra turpis. Mé faiz elementum girarzis, nisi eros vermeio. Sapien in monti palavris qui num significa nadis i pareci latim. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.

                            Quem num gosta di mim que vai caçá sua turmis! Delegadis gente finis, bibendum egestas augue arcu ut est. Manduma pindureta quium dia nois paga. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
                        </Text>
                    </Fieldset>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepRef.current.prevCallback()} />
                        {inputVotacao()}
                        <Button label="Finalizar votação" icon="pi pi-arrow-right" iconPos="right" onClick={() => armazenaVoto(stepRef)} />

                    </div>
                </StepperPanel>


            </Stepper>
        </div>
    );
}

export default Votacao;