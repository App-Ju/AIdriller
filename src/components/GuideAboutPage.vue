<template>
  <v-card class="about__guide">
    <AddressSearchPage/>
    <div class="about__cover">
      <div class="cover__input">
        <div class="cover__arrow cover__up"/>
        <span>Поле для ввода адреса в свободной форме</span>
      </div>
      <div class="cover__btn">
        <div class="cover__arrow cover__left"/>
        <span>При нажатии кнопки запускается поиск <br>адреса соответствующего введеному
        значению</span>
      </div>
      <div class="cover__result">
        <div class="cover__arrow cover__down"/>
        <span>Здесь отображается результат поиска</span>
      </div>
    </div>
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

<style scoped>
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

.cover__input {
  position: absolute;
  top: 47%;
  left: 10.5%;
}

.cover__btn {
  position: absolute;
  top: 55%;
  left: 54%;
}

.cover__result {
  position: absolute;
  top: 70%;
  left: 35%;
}

.cover__arrow {
  position: absolute;
  top: 5px;
  width: 20px;
  height: 20px;
}

.cover__arrow:after {
  content: '';
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-left: 6px solid #337AB7;
  border-bottom: 6px solid #337AB7;
}

.cover__up {
  transform: rotate(135deg);
}

.cover__left {
  transform: rotate(45deg);
  top: 0;
}

.cover__down {
  transform: rotate(-45deg);
  top: -5px;
}
</style>