<script setup>
import SplitterLogo from "@/components/SplitterLogo.vue"
import TippingCalculator from "@/components/TippingCalculator.vue"
</script>

<template>
  <main class="min-h-screen pt-12 lg:pt-0 grid lg:place-items-center">
    <div class="grid grid-rows-[auto_1fr] lg:block">
      <SplitterLogo class="mx-auto" />
      <TippingCalculator />
    </div>
  </main>
</template>
