<template>
	<form class="search__form container">
		<v-text-field
			v-model="query"
			label="Введите адрес"
			@keydown.enter.prevent="push"
			class="search__input tooltip__input"
			:disabled="isDisabled"
		></v-text-field>
		<div class="search__btn tooltip__btn">
			<v-btn
				@click="push"
				:disabled="isDisabled"
			>
				Поиск
			</v-btn>
		</div>
	</form>
	<div
		class="search__previously tooltip__result"
		v-if="!getRequestCompleted"
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
				cols="6"
				class="result__col ml-auto"
			>
				{{ obj.title }}
			</v-col>
			<v-col
				cols="6"
				class="result__col mr-auto"
			>
				{{ obj.value || 'Нет совпадений' }}
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
	name: "AddressSearchPage",
	data() {
		return {
			query: '',
		}
	},
	computed: {
		...mapGetters(['getResult', 'getRequestCompleted']),
		result: function () {
			return [
				{
					title: 'Zip(Индекс)',
					value: this.getResult.postal_code,
				},
				{
					title: 'City(Город)',
					value: this.getResult.cityOrRegion,
				},
				{
					title: 'Street(Улица)',
					value: this.getResult.street,
				},
				{
					title: 'House(Дом)',
					value: this.getResult.house,
				},
				{
					title: 'Flat(Квартира)',
					value: this.getResult.flat,
				},
			]
		}
	},
	methods: {
		...mapActions(['requestAddress']),
		push() {
			if (this.query.trim()) {
				this.requestAddress(this.query)
			}
			this.query = ''
		},
	},
	props: ['isDisabled']
}
</script>

<style scoped>

.search__form {
	margin-top: 10%;
	margin-bottom: 5%;
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