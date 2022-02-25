<template>
	<v-card class="about__guide" >
		<AddressSearchPage :showHint="enableHintMode"/>
	</v-card>
</template>

<script>
import AddressSearchPage from "@/components/AddressSearchPage";

export default {
	name: "GuideAboutPage",	data() {
		return {
			enableHintMode: true
		}
	},
	components: {AddressSearchPage},
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

</style>