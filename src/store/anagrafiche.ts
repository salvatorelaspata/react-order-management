import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'
import { aClienti, aClientiProperties, aFornitori, aFornitoriProperties, aTipoCassa, aTipoCassaProperties, aTipoCollo, aTipoColloProperties } from '../config/anagrafiche'
import { IFormControl, TAnagrafiche } from '../types'

export const state = proxy<{ [key in TAnagrafiche]: { list: any[], controls: IFormControl[] } }>({
    fornitori: { list: [], controls: [] },
    clienti: { list: [], controls: [] },
    tipoCollo: { list: [], controls: [] },
    tipoCassa: { list: [], controls: [] }
})
export const actions = {
    fetchFornitori: () => {
        state['fornitori'].list = aFornitori
        console.log(aFornitori)
        state['fornitori'].controls = aFornitoriProperties
        console.log(aFornitoriProperties)
    },
    fetchClienti: () => {
        state['clienti'].list = aClienti
        console.log(aClienti)
        state['clienti'].controls = aClientiProperties
        console.log(aClientiProperties)
    },
    fetchTipoCollo: () => {
        state['tipoCollo'].list = aTipoCollo
        console.log(aTipoCollo)
        state['tipoCollo'].controls = aTipoColloProperties
        console.log(aTipoColloProperties)
    },
    fetchTipoCassa: () => {
        state['tipoCassa'].list = aTipoCassa
        console.log(aTipoCassa)
        state['tipoCassa'].controls = aTipoCassaProperties
        console.log(aTipoCassaProperties)
    }
}

devtools(state, { name: 'SPEDIZIONI', enabled: true })