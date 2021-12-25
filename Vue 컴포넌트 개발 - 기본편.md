## Vue 컴포넌트 기본구조 이해하기

* Vue 컴포넌트의 기본 구조 이해하기
* User Snippet 설정
* 데이터 바인딩 기본

```vue
<template></template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "Hello",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped></style>

```

vue 는 양방향 바인딩을 지원한다.

### 원시 HTML 데이터 바인딩

* 문자열 데이터 바인딩
* 원시 HTML 데이터 바인딩
  * v-html
* v-html 디렉티비 사용

### 입력 폼 데이터 바인딩

* input type=text 데이터 바인딩
* input type=number 데이터 바인딩
* textarea 데이터 바인딩



button disabled 속성 많이 씀

