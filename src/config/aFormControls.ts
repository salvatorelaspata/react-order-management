import moment from 'moment';

export const aFormControls = [
    { id: "7d96fedb-b9e2-44b4-99ef-31a9690e88e8", property: "Data_Partenza", label: "Data Partenza", type: "date", initialValue: moment(), formula: "(date)" },
    { id: "8f297dca-c1cc-4319-82ba-4d91bd1158bf", property: "Prodotto", label: "Prodotto", type: "text", initialValue: "", formula: "(string - Creare Anagrafica ad hoc?)" },
    { id: "02ea5128-4d73-4f42-924e-f5c17aa7576f", property: "Tipo_Collo", label: "Tipo Collo", type: "select", options: [{ key: "opt1", value: "Opzione 1" }, { key: "opt2", value: "Opzione 2" }], initialValue: "", formula: "(string - Creare Base Dati ad hoc?)" },
    { id: "d247d929-6c60-41b9-abbc-c68154240368", property: "Tipo_Cassa", label: "Tipo Cassa", type: "text", initialValue: "", formula: "(string - Creare Base Dati ad hoc?)" },
    { id: "ab690d2c-3210-4209-94f8-70b266b1d71c", property: "Sdoppiata", label: "Sdoppiata", type: "number", initialValue: 0, formula: "(numero)" },
    { id: "e838481a-8c5c-4e83-92e5-8a35f73116d5", property: "Tipo_pedana", label: "Tipo pedana", type: "text", initialValue: "", formula: "(stringa)" },
    { id: "0406533c-9138-49f7-ad39-c397ad710576", property: "Pedane", label: "Pedane", type: "number", initialValue: 0, formula: "(numerico)" },
    { id: "cd26e347-7935-4f08-a7cb-d4bebd6066d4", property: "Colli", label: "Colli", type: "text", initialValue: "", formula: "(formula: Pedane x costante)" },
    { id: "3c4efd96-9222-4f42-9de0-3da6a704bbd3", property: "Prezzo", label: "Prezzo", type: "number", initialValue: 0, formula: "(currency)" },
    { id: "667a9ff5-d5fe-466d-81fc-08a10201b689", property: "Kg", label: "Kg", type: "number", initialValue: 0, formula: "(float)" },
    { id: "824678b6-5f53-41c5-bb6a-96efa898bc8c", property: "Kg_Valutati", label: "Kg Valutati", type: "number", initialValue: 0, formula: "(float)" },
    { id: "7018f038-dfa3-4073-b07a-8cd918ce5e5c", property: "Vendita", label: "Vendita(€)", type: "text", initialValue: "", formula: "(formula: Kg Valutato * Prezzo)" },
    { id: "61649186-272d-4834-91bd-bc2a9c7d4e51", property: "Sconto", label: "Sconto(€)", type: "text", initialValue: "", formula: "(formula: Vendita * Percentuale)" },
    { id: "3856e121-c733-4d1f-afc3-e36fd1d6f6de", property: "Trasporto", label: "Trasporto(€)", type: "text", initialValue: "", formula: "(formula: Pedane * costante)" },
    { id: "3f93307f-4b09-43ce-8efd-30045e98ca01", property: "Eco", label: "Eco Farm(€)", type: "text", initialValue: "", formula: "(formula: Vendita + Vendita * Percentuale)" },
    { id: "7478537c-70a5-4d23-a930-582541f38584", property: "Pedana", label: "Pedana(€)", type: "text", initialValue: "", formula: "(formula: Pedane *(5,5 * costante )) ???" },
    { id: "5593a967-925e-451c-a8ce-3bc59b6cf506", property: "Imballo", label: "Imballo(€)", type: "text", initialValue: "", formula: "(formula: Colli * costante)" },
    { id: "0079b2e9-e8f7-4d39-b19c-4c6fb35e118c", property: "Fattura", label: "Fattura(€)", type: "text", initialValue: "", formula: "(formula: Vendita-(Sconto+Trasporto+Eco Farm+Pedana+Imballo)" },
    { id: "a920bed9-63cc-4b23-842b-b600c69bf7ae", property: "Tara", label: "€/kg", type: "text", initialValue: "", formula: "(formula: Fattura / Valutati)" },
    { id: "52b5fe7a-28c0-4253-84ec-b224b8d93a4d", property: "Stato", label: "Stato", type: "select", options: [{ key: '0', value: 'BOZZA' }, { key: '1', value: 'In Transito' }, { key: '2', value: 'Completato' }], initialValue: "", formula: "(string - Creare Base Dati ad hoc?)" }
]

export const oInitialFormControls = aFormControls.reduce((o, key) => Object.assign(o, { [key.property]: key.initialValue }), {});
console.log(oInitialFormControls);

/**
 * MOCK DATA
 */
function _makeid(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function _mockData(type: string) {
    if (type === 'text')
        return _makeid(10)
    else if (type === 'number')
        return parseFloat((Math.random() * 1000).toFixed(2))
    else if (type === 'date')
        return moment().subtract(Math.random() * 10, 'days')
    else if (type === 'select')
        return `opt${(Math.random() * 2).toFixed(0)}`
}

export const _mockFormControls = (aMockControls: any) =>
    aMockControls.reduce((o: any, obj: any) => Object.assign(o, { [obj.property]: _mockData(obj.type) }), {});
export const aMockCopy =
    Array.from({ length: 30 }, () => Object.assign({ id: _makeid(30) }, _mockFormControls(aFormControls)))
export const aMockTableControls =
    aMockCopy.map(object => ({ ...object }))
console.log(_mockFormControls, aMockTableControls)
