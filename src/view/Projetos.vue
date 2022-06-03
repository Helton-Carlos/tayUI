<script setup>
import TopHeader from "../component/TopHeader.vue";
import { ref } from "vue";

const chartOptions = {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
];
</script>

<template>
  <div>
    <TopHeader />

    <div class="px-4 pt-4 mx-auto">
      <p class="mb-2 text-lg font-bold border-b-2">Projetos</p>
    </div>

    <div class="px-4 pt-4 mx-auto">
       <h2 class="mb-2 text-lg font-bold">Projetos ativos:</h2>
    </div>
   
    <apexchart
      class="mt-4"
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>