<template>
	<div class="footer__wrapper">
		<div class="footer__container">
			Перед использованием необходимо
			<a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">активировать</a>
			прокси сервер
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer__wrapper {
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	width: 100%;
	background: #afa8b2;

	a:link, :visited {
		color: #ffffff;
	}

	a:hover {
		color: #7f45c7;
	}

}
</style>