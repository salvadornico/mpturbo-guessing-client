<template lang="pug">
.vote-form
	.title
		h2 {{ event.name }}
		h3 Choose your Top 3
	.votes
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
	input(v-model="name" placeholder="Your name")
	button Submit
</template>

<script lang="ts">
import { reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { Driver, stateKey } from "@/store/types"

type VoteChoice = "first" | "second" | "third"

interface VoteFormData {
	name: string
	votes: {
		first: Driver | null
		second: Driver | null
		third: Driver | null
	}
}

export default {
	setup() {
		const store = useStore(stateKey)

		const data: VoteFormData = reactive({
			name: "",
			votes: {
				first: null,
				second: null,
				third: null,
			},
		})

		const getAvailableDrivers = (selected: VoteChoice) => {
			return store.state.event.drivers.filter((driver) => {
				const otherFields = { ...data.votes }
				delete otherFields[selected]

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
.title
	h2
		margin-bottom 0
	h3
		margin-top 0

.votes
	margin-bottom 1rem
</style>
