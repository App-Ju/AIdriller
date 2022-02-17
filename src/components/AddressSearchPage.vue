<template>
  <div>
    <hr>
    поле для ввода адреса, кнопка Search
    <v-btn @click="push">
      Поиск
    </v-btn>
    <hr>
    После ввода адреса, нажимаем кнопку, происходит запрос данных с api сервиса
    Dadata (https://dadata.ru/api/suggest/).
    <hr>
    После получения данных отображаем результат в таблице: Zip(Индекс), City(Город), Street(Улица),
    House(Дом), Flat(Квартира).
  </div>
  <br>
  <div>
    <div>Zip(Индекс)</div>
    <div>{{getResult[0].postal_code}}</div>
    <div>City(Город)</div>
    <div>{{getResult[0].region}}</div>
    <div>Street(Улица)</div>
    <div>{{getResult[0].street}}</div>
    <div>House(Дом)</div>
    <div>{{getResult[0].house}}</div>
    <div>Flat(Квартира)</div>
    <div>{{getResult[0].flat}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "AddressSearchPage",
  computed: mapGetters(['getResult']),
  methods: {
    push() {
      this.$store.dispatch('requestAddress')
    }
  }
}
</script>

<style scoped>

</style>