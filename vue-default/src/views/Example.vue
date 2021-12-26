<template>
  <div>
    <div>
      <select v-model="selectedCity">
        <option :value="city.code" :key="i" v-for="(city, i) in cityList">
          {{ city.name }}
        </option>
      </select>
      <input type="text" v-model="userName" />
      <button type="button" @click="searchUserList">조회</button>
    </div>
    <div>table</div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      cityList: [
        { name: "서울", code: "02" },
        { name: "부산", code: "21" },
        { name: "제주", code: "064" },
      ],
      selectedCity: "",
      userName: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    searchUserList() {
      const params = {
        selectedCity: this.selectedCity,
        userName: this.userName,
        userList: [],
      };
      this.userList = this.getUserList(params);
    },
    getUserList(params) {
      console.log(params);

      let list = [
        { name: "유재석", age: 50, job: "연예인" },
        { name: "하하", age: 40, job: "연예인" },
        { name: "양세찬", age: 37, job: "연예인" },
        { name: "김종국", age: 46, job: "연예인" },
      ];

      return list;
    },
  },
};
</script>
<style scoped></style>
