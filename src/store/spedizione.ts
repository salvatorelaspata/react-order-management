import moment from 'moment'
import { proxy, useSnapshot } from 'valtio'
import { devtools } from 'valtio/utils'
import { oInitialFormControls } from '../config/aFormControls'
import { state as spedizioniState } from './spedizioni'

export const state = proxy<any>({ current: oInitialFormControls })

export const actions = {
    getSpedizioneById(id: string) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const spedizioni = useSnapshot(spedizioniState)
        this.setSpedizione(spedizioni.list.find(oSpedizione => oSpedizione.id === id))
    },
    setSpedizione: (oSpedizione: any) => {
        state.current = Object.assign({}, oSpedizione);
    },
    handleChange: (e: any) => {
        const { name, value } = e.target
        state.current[name] = value || '' // ({ ...state, [name]: value || '' });
    },
    handleChangeDate: (e: any, name: string) => {
        state.current[name] = e || moment().format('DD/MM/YYYY') // state({ ...state, [name]: e || moment().format('DD/MM/YYYY') });
    }
}

devtools(state, { name: 'SPEDIZIONE', enabled: true })