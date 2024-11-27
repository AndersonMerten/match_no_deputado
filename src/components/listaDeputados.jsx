import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { border } from '@chakra-ui/icons';

const DeputadosList = ({ deputados }) => {

    const imageBodyTemplate = (deputado) => {
        return <img src={deputado.urlFoto} alt={"foto do parlamentar"} 
        style={{
            borderRadius: "10%",
            width: "200px"
        }}/>;
    };

    return (
        <div className='card'>
            {console.log(deputados)}
            <DataTable value={deputados} paginator rows={5} rowsPerPageOptions={[5, 10,20,50]} tableStyle={{ minWidth: '50rem' }}>
                <Column header="Foto" body={imageBodyTemplate}></Column>
                <Column field='nome' header="Nome" sortable filter style={{ width: '25%' }}></Column>
                <Column field='siglaPartido' header="Partido" sortable style={{ width: '25%' }}></Column>
                <Column field='siglaUf' header="Estado" sortable style={{ width: '25%' }}></Column>

            </DataTable>
        </div>
        
    );
};

export default DeputadosList;
