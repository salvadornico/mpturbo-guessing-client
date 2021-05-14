import { InjectionKey } from "vue"
import { Store } from "vuex"

export interface Driver {
	id: number
	name: string
}

export interface Vote {
	name: string
	choices: {
		first: Driver
		second: Driver
		third: Driver
	}
}

export interface SeriesEvent {
	name: string
	drivers: Driver[]
	votes: Vote[]
}

export interface State {
	event: SeriesEvent
}

export const stateKey: InjectionKey<Store<State>> = Symbol()
