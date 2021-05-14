import { State, Vote } from "@/store/types"
import { createStore } from "vuex"

export default createStore<State>({
	state: {
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
			votes: [
				{
					name: "Test",
					choices: {
						first: {
							id: 1,
							name: "Teemu Suninen / Mikko Markkula",
						},
						second: {
							id: 2,
							name: "Adrien Fourmaux / Renaud Jamoul",
						},
						third: {
							id: 3,
							name: "Gus Greensmith / Elliott Edmondson",
						},
					},
				},
			],
		},
	},
	mutations: {
		addVote(state: State, vote: Vote) {
			state.event.votes.push(vote)
		},
	},
	actions: {
		saveVote({ commit }, vote) {
			// call API here
			commit("addVote", vote)
		},
	},
	modules: {},
})
