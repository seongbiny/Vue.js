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
* 

button disabled 속성 많이 씀

v-if는 조건에 해당하는것만 렌더링되는데 v-show는 일단 다 (html이) 렌더딩 된 후에 조건에 해당하는것만 화면에 띄운다.

어떤 객체가 화면에 빈번하게 보였다 안보였다 하려면 v-show 하는게 효율적이다.



* computed를 이용해서 data 필드를 감지하고, 새로운 필드를 정의해서 사용하는 방법을 익힌다.

한 번의 연산으로 원하는 데이터를 계속 쓸 수 있다. 

methods로 하면 쓸 때마다 연산 해줘야함

watch vs computed

computed는 새로운 데이터필드를 만드는 것

watch는 정의된 데이터필드만 쓸 수 있다. 정의된 데이터필드에 변경사항이 발생하면 바로 반영됨 => 많은 자원을 소모함

지켜보다가 변경이 일어나면 특정 함수를 수행할 때 주로 쓴다.

