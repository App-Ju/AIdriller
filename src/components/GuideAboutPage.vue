<template>
	<v-card class="about__guide">
		<AddressSearchPage/>
		<div class="about__cover"/>
	</v-card>
	<div class="container mt-6">
		Отобразить вид С пояснениями к каждому контролу по его функциональности.
		Вывести текстовое описание того, как работает поиск в целом.
	</div>
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

:deep(.search__form) {

	.search__input:before {
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

	.search__input:after {
		font-size: 22px;
		content: 'Поле для ввода адреса в свободной форме';
		position: absolute;
		top: 65px;
		left: 40px;
	}

	.search__btn:before {
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

	.search__btn:after {
		font-size: 22px;
		content: 'При нажатии кнопки запускается поиск адреса соответствующего введеному значению';
		position: absolute;
		left: 120px;
		width: 45%;
	}

}

:deep(.search__previously:before) {
	content: '';
	position: absolute;
	width: 20px;
	height: 20px;
	box-sizing: border-box;
	border-left: 6px solid #337AB7;
	border-bottom: 6px solid #337AB7;
	top: -35px;
	left: 10px;
	transform: rotate(-45deg);
}

:deep(.search__previously:after) {
	font-size: 20px;
	content: 'Здесь отображается результат поиска';
	position: absolute;
	top: -30px;
	left: 40px;
}

</style>