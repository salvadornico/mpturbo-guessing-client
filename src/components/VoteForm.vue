<template lang="pug">
.vote-form
	.title
		h2 {{ event.name }}
		h3 Choose your Top 3
	.choices
		select(name="first" v-model="choices.first" @change="onSelect($event)")
			option(value="")
			option(v-for="driver in getAvailableDrivers('first')" :key="driver.id" :value="driver") {{ driver.name }}
		br
		select(name="second" v-model="choices.second" @change="onSelect($event)")
			option(value="")
			option(v-for="driver in getAvailableDrivers('second')" :key="driver.id" :value="driver") {{ driver.name }}
		br
		select(name="third" v-model="choices.third" @change="onSelect($event)")
			option(value="")
			option(v-for="driver in getAvailableDrivers('third')" :key="driver.id" :value="driver") {{ driver.name }}
	input(v-model="name" placeholder="Your name")
	button Submit
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { Driver, stateKey } from "@/store/types"

type VoteChoice = "first" | "second" | "third"

interface VoteFormData {
	name: string
	choices: {
		first: Driver | null
		second: Driver | null
		third: Driver | null
	}
}

export default defineComponent({
	setup() {
		const store = useStore(stateKey)

		const data: VoteFormData = reactive({
			name: "",
			choices: {
				first: null,
				second: null,
				third: null,
			},
		})

		const event = computed(() => store.state.event)

		const getAvailableDrivers = (selected: VoteChoice) => {
			return store.state.event.drivers.filter((driver) => {
				const otherFields = { ...data.choices }
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

		return { ...toRefs(data), event, getAvailableDrivers, onSelect }
	},
})
</script>

<style scoped lang="stylus">
.title
	h2
		margin-bottom 0
	h3
		margin-top 0

.choices
	margin-bottom 1rem
</style>
