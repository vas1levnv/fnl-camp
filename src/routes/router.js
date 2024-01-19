import HomePage from "@/pages/HomePage.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({

	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: HomePage },
	],
	scrollBehavior() {
		// always scroll to top
		return { top: 0 , behavior: 'smooth'}
	},
})

export default router