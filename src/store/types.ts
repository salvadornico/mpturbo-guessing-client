import { InjectionKey } from "vue"
import { Store } from "vuex"

export interface Driver {
	id: number
	name: string
}

export interface SeriesEvent {
	name: string
	drivers: Driver[]
}

export interface State {
	event: SeriesEvent
}

export const stateKey: InjectionKey<Store<State>> = Symbol()
