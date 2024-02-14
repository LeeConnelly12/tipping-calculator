<script setup>
import Input from "@/components/Input.vue"
import DollarSign from "@/components/DollarSign.vue"
import People from "@/components/People.vue"
</script>

<template>
  <div class="bg-white rounded-t-3xl p-8 text-turquoise">
    <label class="block" for="bill">Bill</label>
    <Input class="mt-2" type="text" id="bill">
      <template #icon>
        <DollarSign />
      </template>
    </Input>
    <p class="mt-8">Select Tip %</p>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <label
        class="bg-green h-12 rounded-md text-white text-center text-2xl py-2 cursor-pointer"
      >
        <p>5%</p>
        <input class="hidden" type="radio" name="tip" value="5%" />
      </label>
      <label
        class="bg-green h-12 rounded-md text-white text-center text-2xl py-2 cursor-pointer"
      >
        <p>10%</p>
        <input class="hidden" type="radio" name="tip" value="10%" />
      </label>
    </div>
    <label class="block mt-8" for="number_of_people">Number of People</label>
    <Input class="mt-2" type="text" id="number_of_people">
      <template #icon>
        <People />
      </template>
    </Input>
    <div class="mt-8 bg-green rounded-2xl pt-9 px-6 pb-6">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-white">Tip Amount</p>
          <p class="text-gray text-sm">/ person</p>
        </div>
        <p class="text-2xl text-teal">$4.27</p>
      </div>
      <div class="flex justify-between items-center mt-5">
        <div>
          <p class="text-white">Total</p>
          <p class="text-gray text-sm">/ person</p>
        </div>
        <p class="text-2xl text-teal">$32.79</p>
      </div>
      <button
        class="uppercase bg-teal text-green w-full rounded-md h-12 mt-8 text-xl"
        type="button"
      >
        Reset
      </button>
    </div>
  </div>
</template>
