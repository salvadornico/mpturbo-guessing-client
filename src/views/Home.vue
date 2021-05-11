<template lang="pug">
.home
  h1 MP Turbo Guessing Game
  VoteForm
</template>

<script lang="ts">
import { defineComponent } from "vue"
import VoteForm from "@/components/VoteForm.vue"

export default defineComponent({
	name: "Home",
	components: {
		VoteForm,
	},
})
</script>
