<template>
	<form class="search__form container">
		<v-text-field
			v-model="query"
			label="Введите адрес"
			@keydown.enter.prevent="push"
			class="search__input"
		></v-text-field>
		<div class="search__btn">
			<v-btn @click="push">
				Поиск
			</v-btn>
		</div>
	</form>
	<div
		class="search__previously"
		v-if="getResult.length < 1"
	>
		Введите адрес и нажмите кнопку.
	</div>

	<v-container
		v-else
		class="search__result container"
	>
		<v-row>
			<v-col
				cols="3"
				class="result__col ml-auto"
			>
				Zip(Индекс)
			</v-col>
			<v-col
				cols="3"
				class="result__col mr-auto"
			>
				{{ getResult[0].postal_code || 'Нет совпадений' }}
			</v-col>
		</v-row>
		<v-row>
			<v-col
				cols="3"
				class="result__col ml-auto"
			>
				City(Город)
			</v-col>
			<v-col
				cols="3"
				class="result__col mr-auto"
			>
				{{ getResult[0].city || getResult[0].region || 'Нет совпадений' }}
			</v-col>
		</v-row>
		<v-row>
			<v-col
				cols="3"
				class="result__col ml-auto"
			>
				Street(Улица)
			</v-col>
			<v-col
				cols="3"
				class="result__col mr-auto"
			>
				{{ getResult[0].street || 'Нет совпадений' }}
			</v-col>
		</v-row>
		<v-row>
			<v-col
				cols="3"
				class="result__col ml-auto"
			>
				House(Дом)
			</v-col>
			<v-col
				cols="3"
				class="result__col mr-auto"
			>
				{{ getResult[0].house || 'Нет совпадений' }}
			</v-col>
		</v-row>
		<v-row>
			<v-col
				cols="3"
				class="result__col ml-auto"
			>
				Flat(Квартира)
			</v-col>
			<v-col
				cols="3"
				class="result__col mr-auto"
			>
				{{ getResult[0].flat || 'Нет совпадений' }}
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
			query: ''
		}
	},
	computed: mapGetters(['getResult']),
	methods: {
		...mapActions(['requestAddress']),
		push() {
			console.log('q', this.query)
			if (this.query.trim()) {
				this.requestAddress(this.query)
			}
			this.query = ''
		}
	}
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
	font-size: 18px;
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