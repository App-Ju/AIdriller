<template>
	<v-container class="lib__wrapper mt-6">
		<v-row cols="12" class="lib__title">
			<h1>Список использованных инструментов</h1>
		</v-row>
		<v-row>
			<v-col cols="6">
				<v-card class="lib__card">
					<img :src="require('@/assets/liblogos/vue.png')" alt="#">
					<div class="lib__text">
						<a href="https://vuejs.org" target="_blank">
							<div>Vue.JS</div>
						</a>
						<div>
							JavaScript-фреймворк с открытым исходным кодом для создания
							пользовательских интерфейсов[3]. Легко интегрируется в проекты с использованием других
							JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных
							приложений в реактивном стиле.
						</div>
					</div>
				</v-card>
			</v-col>
			<v-col cols="6">
				<v-card class="lib__card">
					<img :src="require('@/assets/liblogos/vuex.png')" alt="#">
					<div class="lib__text">
						<a href="https://vuex.vuejs.org" target="_blank">
							<div>VueX</div>
						</a>
						<div>
							Это шаблон управления состоянием + библиотека для приложений Vue.js. Он служит
							централизованным хранилищем для всех компонентов приложения с правилами, гарантирующими, что
							состояние может изменяться только предсказуемым образом.
						</div>
					</div>
				</v-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="6">
				<v-card class="lib__card">
					<img :src="require('@/assets/liblogos/vue.png')" alt="#">
					<div class="lib__text">
						<a href="https://router.vuejs.org" target="_blank">
							<div>Vue Router</div>
						</a>
						<div>
							Официальный маршрутизатор для Vue.js. Он тесно интегрирован с ядром Vue.js, что упрощает
							создание одностраничных приложений с помощью Vue.js.
						</div>
					</div>
				</v-card>
			</v-col>
			<v-col cols="6">
				<v-card class="lib__card">
					<img :src="require('@/assets/liblogos/vuetify.png')" alt="#">
					<div class="lib__text">
						<a href="https://vuetifyjs.com/en/" target="_blank">
							<div>Vuetify</div>
						</a>
						<div>
							Это полная структура пользовательского интерфейса, построенная на основе Vue.js. Цель
							проекта — предоставить разработчикам инструменты, необходимые им для создания богатого и
							привлекательного пользовательского интерфейса.
						</div>
					</div>
				</v-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="6">
				<v-card class="lib__card">
					<img :src="require('@/assets/liblogos/axios.png')" alt="#">
					<div class="lib__text">
						<a href="https://axios-http.com/docs/intro" target="_blank">
							<div>Axios</div>
						</a>
						<div>
							Это HTTP-клиент на основе Promise для node.js и браузера. Он может работать в браузере и
							nodejs с одной и той же кодовой базой. На стороне сервера используется собственный
							http-модуль node.js, а на стороне клиента (браузера) — XMLHttpRequests.
						</div>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "LibAboutPage"
}
</script>

<style lang="scss" scoped>
.lib__wrapper {
	width: 80%;
}

.lib__title {
	justify-content: center;
	margin-bottom: 5%;
	font-size: 20px;
}

.lib__card {
	height: 20vh;
	display: flex;
	justify-content: space-around;
	align-items: center;

	img {
		object-fit: contain;
		border-radius: 50%;
		border: 1px solid #d6dce8;
		width: 20%;

	}
}

.lib__text {
	width: 65%;
	line-height: 110%;

	:first-child {
		font-size: 20px;
		margin-bottom: 10px;
	}

	a:link, :visited {
		color: #70a2a4;
	}

	a:hover {
		color: #7f45c7;
	}
}

</style>