import HomePage from "@/pages/HomePage.vue";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({

	history: createWebHistory(),
	routes: [
		{ path: '/', component: HomePage },
	],
	scrollBehavior() {
		// always scroll to top
		return { top: 0 , behavior: 'smooth'}
	},
})

export default router