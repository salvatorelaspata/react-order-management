import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'
import { aFormControls, aMockTableControls } from '../config/formControls'

export const state = proxy<{ list: any[], controls: any[] }>({ list: [], controls: [] })
export const actions = {
    fetchSpedizioni: async () => {
        state.controls = aFormControls;
        setTimeout(() => {
            state.list = aMockTableControls;
        }, 1000)
    }
}

devtools(state, { name: 'SPEDIZIONI', enabled: true })