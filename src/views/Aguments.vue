<template>
  <!-- aguments -->
  <section style="width:30%; margin:auto;">
    <pre style="text-align:left;">
        传参：1, 2, 3, 4, 5

        getData(aguments) {
            console.log(aguments);   // 1
        }

        getAguments(...aguments) {
            console.log(aguments);  // [1,2,3,4,5]
        }
    </pre>
  </section>
</template>
<script>
export default {
  name: "aguments",
  mounted() {
    this.getData(1, 2, 3, 4, 5);
    this.getAguments(1, 2, 3, 4, 5);
  },
  methods: {
    getData(aguments) {
      console.log(aguments);
    },
    getAguments(...aguments) {
      console.log(aguments);
    }
  }
};
</script>
