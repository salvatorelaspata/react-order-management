import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'
import { aFormControls, aMockTableControls } from '../config/aFormControls'

export const state = proxy<{ list: any[], controls: any[] }>({ list: [], controls: [] })
export const actions = {
    fetchSpedizioni: async () => {
        setTimeout(() => {
            state.list = aMockTableControls;
            state.controls = aFormControls;
        }, 1000)
    }
}

devtools(state, { name: 'SPEDIZIONI', enabled: true })