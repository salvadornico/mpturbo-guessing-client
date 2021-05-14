<template lang="pug">
.home
  h1 MP Turbo Guessing Game
  VoteForm
  VoteList
</template>

<script lang="ts">
import { defineComponent } from "vue"
import VoteForm from "@/components/VoteForm.vue"
import VoteList from "@/components/VoteList.vue"

export default defineComponent({
	name: "Home",
	components: {
		VoteForm,
		VoteList,
	},
})
</script>
