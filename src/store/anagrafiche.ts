import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'
import { aClienti, aClientiProperties, aFornitori, aFornitoriProperties, aTipoCassa, aTipoCassaProperties, aTipoCollo, aTipoColloProperties, oInitialClienti, oInitialFornitori, oInitialTipoCassa, oInitialTipoCollo } from '../mock/anagrafiche'
import { IFormControl, TAnagrafiche } from '../types'

export const state = proxy<{ [key in TAnagrafiche]: { label: string, list: any[], controls: IFormControl[], initialState: any } }>({
    fornitori: { label: 'Fornitori', list: aFornitori, controls: aFornitoriProperties, initialState: oInitialFornitori },
    clienti: { label: 'Clienti', list: aClienti, controls: aClientiProperties, initialState: oInitialClienti },
    tipoCollo: { label: 'Tipo Collo', list: aTipoCollo, controls: aTipoColloProperties, initialState: oInitialTipoCollo },
    tipoCassa: { label: 'Tipo Cassa', list: aTipoCassa, controls: aTipoCassaProperties, initialState: oInitialTipoCassa }
})

export const actions = {
    fetchFornitori: async () => { },
    fetchClienti: async () => { },
    fetchTipoCollo: async () => { },
    fetchTipoCassa: async () => { }
}
export const stateAnagrafica = proxy<any>({})
export const actionsAnagrafica = {
    setAnagrafica: (anagrafica: any) => {
        Object.assign(stateAnagrafica, { ...anagrafica })
    }
}
devtools(state, { name: 'ANAGRAFICHE', enabled: true })