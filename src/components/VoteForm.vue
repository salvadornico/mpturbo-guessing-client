<template lang="pug">
#vote-form
	h2 {{ event.name }}
	h3 Choose your Top 3
	select(name="first" v-model="votes.first" @change="onSelect($event)")
		option(value="")
		option(v-for="driver in getAvailableDrivers('first')" :key="driver.id" :value="driver") {{ driver.name }}
	br
	select(name="second" v-model="votes.second" @change="onSelect($event)")
		option(value="")
		option(v-for="driver in getAvailableDrivers('second')" :key="driver.id" :value="driver") {{ driver.name }}
	br
	select(name="third" v-model="votes.third" @change="onSelect($event)")
		option(value="")
		option(v-for="driver in getAvailableDrivers('third')" :key="driver.id" :value="driver") {{ driver.name }}
</template>

<script lang="ts">
import { reactive, toRefs } from "vue"

interface Driver {
	id: number
	name: string
}

interface SeriesEvent {
	name: string
	drivers: Driver[]
}

type VoteChoice = "first" | "second" | "third"

interface VoteFormData {
	event: SeriesEvent
	votes: {
		first: Driver | null
		second: Driver | null
		third: Driver | null
	}
}

export default {
	setup() {
		const data: VoteFormData = reactive({
			event: {
				name: "Rally Portugal",
				drivers: [
					{ id: 1, name: "Teemu Suninen / Mikko Markkula" },
					{ id: 2, name: "Adrien Fourmaux / Renaud Jamoul" },
					{ id: 3, name: "Gus Greensmith / Elliott Edmondson" },
					{ id: 4, name: "Dani Sordo / Carlos del Barrio" },
					{ id: 5, name: "Ott Tänak / Martin Järveoja" },
					{ id: 6, name: "Thierry Neuville / Martijn Wydaeghe" },
					{ id: 7, name: "Craig Breen / Paul Nagle" },
					{ id: 8, name: "Oliver Solberg / Sebastian Marshall" },
					{ id: 9, name: "Pierre-Louis Loubet / Vincent Landais" },
					{ id: 10, name: "Sébastien Ogier / Julien Ingrassia" },
					{ id: 11, name: "Elfyn Evans / Scott Martin" },
					{ id: 12, name: "Kalle Rovanperä / Jonne Halttunen" },
					{ id: 13, name: "Cyrille Féraud / Benoît Manzo" },
					{ id: 14, name: "Janne Tuohino / Reeta Hämäläinen" },
					{ id: 15, name: "Lorenzo Bertelli / Simone Scattolin" },
					{ id: 16, name: "Armando Pereira / Rémi Tutélaire" },
					{ id: 17, name: "Niko Pulić / Aleksandra Kovačić" },
					{ id: 18, name: "Takamoto Katsuta / Daniel Barritt" },
				],
			},
			votes: {
				first: null,
				second: null,
				third: null,
			},
		})

		const getAvailableDrivers = (field: VoteChoice) => {
			return data.event.drivers.filter((driver) => {
				const otherFields = { ...data.votes }
				delete otherFields[field]
				return (
					driver.id !== otherFields.first?.id &&
					driver.id !== otherFields.second?.id &&
					driver.id !== otherFields.third?.id
				)
			})
		}

		function onSelect(changeEvent: Event) {
			console.log(changeEvent)
		}

		return { ...toRefs(data), getAvailableDrivers, onSelect }
	},
}
</script>

<style scoped lang="stylus">
h2
	margin 40px 0 0
</style>
