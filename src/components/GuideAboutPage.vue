<template>
	<v-card class="about__guide">
		<AddressSearchPage/>
		<div class="about__cover"/>
	</v-card>
</template>

<script>
import AddressSearchPage from "@/components/AddressSearchPage";

export default {
	name: "GuideAboutPage",
	components: {AddressSearchPage}
}
</script>

<style lang="scss" scoped>

span {
	margin-left: 30px;
}

.about__guide {
	transform: scale(0.65);
	padding-bottom: 3%;
}

.about__cover {
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	font-size: 24px;
}

.about__cover:after {
	content: 'Разбивает адрес из строки по отдельным полям согласно КЛАДР/ФИАС. Определяет почтовый индекс. Отобажает ресультат в таблице с полями: индекс, город, улица, дом, квартира';
	width: 70%;
	position: absolute;
	left: 15%;
	top: 3%;
	text-align: center;
}

:deep(.search__form) {

	.tooltip__input:before {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		box-sizing: border-box;
		border-left: 6px solid #337AB7;
		border-bottom: 6px solid #337AB7;
		top: 67px;
		left: 10px;
		transform: rotate(135deg);
	}

	.tooltip__input:after {
		font-size: 22px;
		width: 30%;
		content: 'Поле для ввода адреса в свободной форме';
		position: absolute;
		top: 65px;
		left: 40px;

	}

	.tooltip__btn:before {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		box-sizing: border-box;
		border-left: 6px solid #337AB7;
		border-bottom: 6px solid #337AB7;
		top: 8px;
		left: 100px;
		transform: rotate(45deg);
	}

	.tooltip__btn:after {
		font-size: 22px;
		content: 'При нажатии кнопки запускается поиск адреса соответствующего введеному значению';
		position: absolute;
		left: 120px;
		width: 45%;
	}

}

:deep(.tooltip__result:before) {
	content: '';
	position: absolute;
	width: 20px;
	height: 20px;
	box-sizing: border-box;
	border-left: 6px solid #337AB7;
	border-bottom: 6px solid #337AB7;
	top: 3px;
	left: 102%;
	transform: rotate(45deg);
}

:deep(.tooltip__result:after) {
	font-size: 20px;
	width: 35%;
	content: 'Здесь отображается результат поиска';
	position: absolute;
	top: 0;
	left: 108%;
}

</style>