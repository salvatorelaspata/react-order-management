import { IFormControl } from '../types';
import { _mockFormControls, _makeCharacters } from '../config/formControls';
// FORNITORI
export const aFornitoriProperties: IFormControl[] = [
    { id: "f0", property: "nome", label: "Nome", type: "text", initialValue: "" },
    { id: "f1", property: "cognome", label: "Cognome", type: "text", initialValue: "" },
    { id: "f2", property: "sconto", label: "Sconto", type: "text", initialValue: "" },
]
export const oInitialFornitori =
    aFornitoriProperties.reduce((o, key) => Object.assign(o, { [key.property]: key.initialValue }), {});
export const aFornitori =
    Array.from({ length: 10 }, () => Object.assign({ id: _makeCharacters(30) }, _mockFormControls(aFornitoriProperties)))

// CLIENTI
export const aClientiProperties: IFormControl[] = [
    { id: "f0", property: "nome", label: "Nome", type: "text", initialValue: "" },
    { id: "f1", property: "cognome", label: "Cognome", type: "text", initialValue: "" },
    { id: "f1", property: "destinazione", label: "Destinazione", type: "select", options: [{ key: '1', value: 'Dest 1' }, { key: '2', value: 'Dest 2' }], initialValue: "" },
]
export const oInitialClienti =
    aClientiProperties.reduce((o, key) => Object.assign(o, { [key.property]: key.initialValue }), {});
export const aClienti =
    Array.from({ length: 10 }, () => Object.assign({ id: _makeCharacters(30) }, _mockFormControls(aClientiProperties)))

// Tipo Collo
export const aTipoColloProperties: IFormControl[] = [
    { id: "f0", property: "chiave", label: "Chiave", type: "text", initialValue: "" },
    { id: "f1", property: "valore", label: "Valore", type: "text", initialValue: "" }
]
export const oInitialTipoCollo =
    aTipoColloProperties.reduce((o, key) => Object.assign(o, { [key.property]: key.initialValue }), {});
export const aTipoCollo =
    Array.from({ length: 10 }, () => Object.assign({ id: _makeCharacters(30) }, _mockFormControls(aTipoColloProperties)))

// Tipo Cassa
export const aTipoCassaProperties: IFormControl[] = [
    { id: "f0", property: "chiave", label: "Chiave", type: "text", initialValue: "" },
    { id: "f1", property: "valore", label: "Valore", type: "text", initialValue: "" }
]
export const oInitialTipoCassa =
    aTipoCassaProperties.reduce((o, key) => Object.assign(o, { [key.property]: key.initialValue }), {});
export const aTipoCassa =
    Array.from({ length: 10 }, () => Object.assign({ id: _makeCharacters(30) }, _mockFormControls(aTipoCassaProperties)))

