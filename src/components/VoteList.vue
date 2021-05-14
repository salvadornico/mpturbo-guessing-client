<template lang="pug">
h2 Votes so far
table
	tr
		th Name
		th 1st 🥇
		th 2nd 🥈
		th 3rd 🥉
	tr(v-for="vote in votes")
		td {{ vote.name }}
		td {{ vote.choices.first.name }}
		td {{ vote.choices.second.name }}
		td {{ vote.choices.third.name }}
</template>

<script lang="ts">
import { stateKey } from "@/store/types"
import { useStore } from "vuex"
import { computed, defineComponent } from "vue"

export default defineComponent({
	setup() {
		const store = useStore(stateKey)

		const votes = computed(() => store.state.event.votes)

		return { votes }
	},
})
</script>

<style lang="stylus" scoped>
table
	max-width 75%
	position relative
	left 50%
	transform translateX(-50%)
</style>
