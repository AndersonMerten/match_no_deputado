import React, { useState, useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dialog } from 'primereact/dialog';
import MostraDeputado from './motraDeputado';


const DeputadosList = ({ deputados }) => {
    
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [viewDeputado, setViewDeputado] = useState(false);
    const [deputado, setDeputado] = useState({id:""});

     const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        if (value === globalFilterValue) return;

        setGlobalFilterValue(value);
    };

    // Memorizar filtros
    const filters = useMemo(() => ({
        global: { value: globalFilterValue, matchMode: FilterMatchMode.CONTAINS }
    }), [globalFilterValue]);

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end" style={{justifyContent: "end",
                display: "flex",
                flexDirection: "row"}}>
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText 
                        value={globalFilterValue} 
                        onChange={onGlobalFilterChange} 
                        placeholder="busque aqui" 
                    />
                </IconField>
            </div>
        );
    };

    // Memorizar header
    const header = useMemo(() => renderHeader(), [globalFilterValue]);

    const imageBodyTemplate = (deputado) => {
        return (
            <img 
                src={deputado.urlFoto} 
                alt="foto do parlamentar"
                style={{
                    borderRadius: "10%",
                    width: "200px",
                }}
            />
        );
    };

    const onRowSelect = (event) =>{
        setDeputado(event.data);
        setViewDeputado(true);
    }

    return (
        <div className="card">
            <DataTable 
                value={deputados} 
                paginator 
                rows={5} 
                dataKey="id" 
                rowsPerPageOptions={[5, 10, 20, 50]} 
                tableStyle={{ minWidth: '50rem' }}
                filters={filters} // Memorizar filtros resolve problemas
                globalFilterFields={['nome', 'siglaPartido', 'siglaUf']} 
                header={header} 
                emptyMessage="Nenhum deputado encontrado com esse filtro"
                selectionMode="single"
                onRowSelect={onRowSelect}
            > 
                <Column header="Foto" body={imageBodyTemplate} ></Column>
                <Column field="nome" header="Nome" sortable style={{ width: '25%' }}></Column>
                <Column field="siglaPartido" header="Partido" sortable style={{ width: '25%' }}></Column>
                <Column field="siglaUf" header="Estado" sortable ></Column>
            </DataTable>
            <Dialog visible={viewDeputado} style={{ width: '50vw' }} onHide={() => {if (!viewDeputado) return; setViewDeputado(false); }}>
            <MostraDeputado id = {deputado.id}/>
            </Dialog>
        </div>
    );
};

export default DeputadosList;
