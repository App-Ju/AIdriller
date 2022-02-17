<template>
  <div>
    <hr>
    поле для ввода адреса, кнопка Search
    <hr>
    После ввода адреса, нажимаем кнопку, происходит запрос данных с api сервиса Dadata (https://dadata.ru/api/suggest/).
    <hr>
    После получения данных отображаем результат в таблице: Zip(Индекс), City(Город), Street(Улица), House(Дом),
    Flat(Квартира).
  </div>
</template>

<script>
export default {
  name: "AddressSearchPage"
}
</script>

<style scoped>

</style>