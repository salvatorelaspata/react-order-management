import { MomentInput } from 'moment'
// Menu Items
interface MenuItem {
    id: string,
    path: string,
    icon: JSX.Element,
    text: string,
    component: JSX.Element | null,
    drawerVisible?: boolean,
    disabled?: boolean,
}

// Form Control
type TType = 'text' | 'number' | 'select' | 'date'; //| 'time' | 'datetime' | 'checkbox' | 'radio' | 'hidden' | 'password' | 'textarea'
interface IFormControl {
    id: string;
    property: string; // type DynamicProperty = keyof typeof obj
    label: string;
    type: TType;
    initialValue: string | number | MomentInput;
    options?: { key: string, value: string }[];
    formula?: string;
}

type TAnagrafiche = 'fornitori' | 'clienti' | 'tipoCollo' | 'tipoCassa';

// Dynamic Control - not working
// const obj = aFormControls.reduce((o, key) => Object.assign(o, { [key.property]: key.initialValue }), {});
// export type DynamicFormControls = keyof typeof obj;
// const obj = {
//     Colli: "",
//     Data_Partenza: moment(),
//     Eco: "",
//     Fattura: "",
//     Imballo: "",
//     Kg: 0,
//     Kg_Valutati: 0,
//     Pedana: "",
//     Pedane: 0,
//     Prezzo: 0,
//     Prodotto: "",
//     Sconto: "",
//     Sdoppiata: 0,
//     Stato: "",
//     Tara: "",
//     Tipo_Cassa: "",
//     Tipo_Collo: "",
//     Tipo_pedana: "",
//     Trasporto: "",
//     Vendita: ""
// }
// type DynamicFormControls = keyof typeof obj;
// var a: DynamicFormControls = '';
// console.log(a)
