import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'
import { aSpedizioni, aSpedizioniControls } from '../mock/spedizioni'

export const state = proxy<{ list: any[], controls: any[] }>({ list: aSpedizioni, controls: aSpedizioniControls })
export const actions = {
    fetchSpedizioni: async () => { }
}

devtools(state, { name: 'SPEDIZIONI', enabled: true })