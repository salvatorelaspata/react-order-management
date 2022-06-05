import { _mockFormControls } from './aFormControls';

export const aFornitoriProperties = [
    { id: "f0", property: "nome", label: "Nome", type: "text", initialValue: "" },
    { id: "f1", property: "cognome", label: "Cognome", type: "text", initialValue: "" },
    { id: "f2", property: "sconto", label: "Sconto", type: "text", initialValue: "" },
]
export const oInitialFornitori = aFornitoriProperties.reduce((o, key) => Object.assign(o, { [key.property]: key.initialValue }), {});

export const Fornitori = _mockFormControls(aFornitoriProperties);

export const ClientiProperties = [
    { id: "f0", property: "nome", label: "Nome", type: "text", initialValue: "" },
    { id: "f1", property: "cognome", label: "Cognome", type: "text", initialValue: "" },
    { id: "f1", property: "destinazione", label: "Destinazione", type: "select", options: [{ key: '1', value: 'Dest 1' }, { key: '2', value: 'Dest 2' }], initialValue: "" },
]
export const oInitialClienti = ClientiProperties.reduce((o, key) => Object.assign(o, { [key.property]: key.initialValue }), {});
export const Clienti = _mockFormControls(ClientiProperties);

export const TipoCColloProperties = [
    { id: "f0", property: "chiave", label: "chiave", type: "text", initialValue: "" },
    { id: "f1", property: "valore", label: "valore", type: "text", initialValue: "" }
]
export const oInitialTipoCollo = TipoCColloProperties.reduce((o, key) => Object.assign(o, { [key.property]: key.initialValue }), {});

export const Tipo_Collo = _mockFormControls(TipoCColloProperties);

export const TipoCassaProperties = [
    { id: "f0", property: "chiave", label: "chiave", type: "text", initialValue: "" },
    { id: "f1", property: "valore", label: "valore", type: "text", initialValue: "" }
]
export const oInitialTipoCassa = TipoCassaProperties.reduce((o, key) => Object.assign(o, { [key.property]: key.initialValue }), {});

export const TipoCassa = _mockFormControls(TipoCassaProperties);
