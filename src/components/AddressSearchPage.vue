<template>
	<div
		class="tooltip__about"
		:hidden="!showHint"
	>
		Разбивает запрос из строки по отдельным полям(от региона до квартиры) и ищет совпадения. Автоматически
		исправляет ошибки в запросе. Определяет почтовый индекс. Отображает в таблице первые 10 адресов совпавших с запросом.
	</div>
	<form class="search__form container">
		<v-text-field
			v-model="query"
			label="Введите адрес"
			@keydown.enter.prevent="push"
			class="search__input"
			:disabled="showHint"
		>
		</v-text-field>
		<div
			class="tooltip__input"
			:hidden="!showHint"
		>
			<img :src="require('@/assets/arrow.png')" alt="#">
			<span>  Поле ввода адреса для запроса, в свободной форме</span>
		</div>
		<div class="search__btn">
			<v-btn
				@click="push"
				:disabled="showHint"
			>
				Поиск
			</v-btn>
			<div
				class="tooltip__btn"
				:hidden="!showHint"
			>
				<img :src="require('@/assets/arrow.png')" alt="#">
				<span>  При нажатии кнопки запускается поиск адресов соответствующего введеному запросу</span>
			</div>
		</div>
	</form>
	<div
		class="search__previously"
		v-if="!getRequestCompleted"
	>
		Введите адрес и нажмите кнопку.
	</div>
	<v-container
		v-else
		class="search__result container"
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
	<div
		class="tooltip__result"
		:hidden="!showHint"
	>
		<img :src="require('@/assets/arrow.png')" alt="#">
		<span>  Здесь отображается результат поиска, первые 10 совпадений</span>
	</div>
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
	props: ['showHint']
}
</script>

<style lang="scss" scoped>

.tooltip__about {
	position: relative;
	font-size: 22px;
	width: 70%;
	height: 0;
	top: 2rem;
	margin: 0 auto;
	text-align: center;
	line-height: 120%;
}

.search__form {
	margin-top: 10%;
	margin-bottom: 5%;
}

.search__input {
	position: relative;
	width: 80%;
	margin: 0 auto;
}

.tooltip__input {
	position: relative;
	font-size: 22px;
	width: 30%;
	height: 0;
	top: -2rem;
	left: 11%;

	img {
		position: relative;
		width: 30px;
		height: 30px;
		object-fit: contain;
		top: -3px;
	}
}

.search__btn {
	position: relative;
	display: flex;
	left: 45%;
}

.tooltip__btn {
	position: relative;
	font-size: 22px;
	width: 30%;
	height: 0;
	top: 0.5rem;
	left: 1%;

	img {
		width: 30px;
		height: 30px;
		object-fit: contain;
		transform: rotate(-90deg);
	}
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

.tooltip__result {
	position: relative;
	font-size: 22px;
	width: 50%;
	height: 0;
	top: 0.5rem;
	left: 35%;

	img {
		position: relative;
		width: 30px;
		height: 30px;
		object-fit: contain;
		top: -3px;
	}
}

</style>