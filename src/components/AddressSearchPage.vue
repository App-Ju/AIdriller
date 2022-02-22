<template>
	<form class="search__form container">
		<v-text-field
			v-model="query"
			label="Введите адрес"
			@keydown.enter.prevent="push"
			class="search__input tooltip__input"
		></v-text-field>
		<div class="search__btn tooltip__btn">
			<v-btn @click="push">
				Поиск
			</v-btn>
		</div>
	</form>
	<div
		class="search__previously tooltip__result"
		v-if="getResult.length < 1"
	>
		Введите адрес и нажмите кнопку.
	</div>

	<v-container
		v-else
		class="search__result tooltip__result container"
	>
		<v-row v-for="(obj, key) in result"
		       :key="key">
			<v-col
				v-for="(value, key) in obj"
				:key="key"
				cols="6"
				class="result__col ml-auto"
			>
				{{ key }}
			</v-col>
			<v-col
				v-for="(value, key) in obj"
				:key="key"
				cols="6"
				class="result__col mr-auto"
			>
				{{ value }}
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	name: "AddressSearchPage",
	data() {
		return {
			query: '',
		}
	},
	computed: {
		...mapGetters(['getResult']),
		result: function () {
			return this.getResult
		}
	},
	methods: {
		...mapActions(['requestAddress']),
		push() {
			console.log('res', this.result)
			if (this.query.trim()) {
				this.requestAddress(this.query)
			}
			this.query = ''
		}
	},
}
</script>

<style scoped>

.search__form {
	margin: 10% auto 5% auto;
}

.search__input {
	position: relative;
	width: 80%;
	margin: 0 auto;
}

.search__btn {
	position: relative;
	display: block;
	left: 45%;
}

.search__previously {
	position: relative;
	text-align: center;
	font-size: 20px;
	padding: 20px 0;
	background: #9cd9dc;
	width: 50%;
	left: 25%;
}

.search__result {
	position: relative;
	font-size: 18px;
	width: 30%;
}

.result__col {
	height: 40px;
	background: #9cd9dc;
	border-top: 1px solid;
	border-bottom: 1px solid;
	padding: 10px 0 0 10px;
	margin-bottom: 10px;
}

</style>