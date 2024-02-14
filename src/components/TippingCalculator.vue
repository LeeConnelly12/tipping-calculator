<script setup>
import { computed, ref } from "vue"
import Input from "@/components/Input.vue"
import DollarSign from "@/components/DollarSign.vue"
import People from "@/components/People.vue"

const tips = [5, 10, 15, 25, 50]

const showCustomTip = ref(false)

const defaults = {
  bill: null,
  tip: null,
  people: null,
}

const form = ref({ ...defaults })

function reset() {
  form.value = { ...defaults }
}

const formChanged = computed(() => {
  return JSON.stringify(form.value) === JSON.stringify(defaults)
})

const tip = computed(() => {
  const { bill, tip, people } = form.value

  if (!bill || !tip || !people) {
    return null
  }

  const amount = bill * (tip / 100)

  return Math.floor((amount / people) * 100) / 100
})

const total = computed(() => {
  const { bill, tip, people } = form.value

  if (!bill || !tip || !people) {
    return null
  }

  const tipAmount = (bill * (tip / 100)) / people
  const perPersonAmount = Math.floor((bill / people) * 100) / 100

  return perPersonAmount + tipAmount
})
</script>

<template>
  <div
    class="bg-white rounded-t-3xl lg:rounded-3xl p-8 text-turquoise lg:grid grid-cols-2 gap-x-6 mt-10 xl:mt-20 lg:shadow-md"
  >
    <div>
      <label class="block" for="bill">Bill</label>
      <Input
        v-model="form.bill"
        placeholder="0"
        class="mt-2"
        min="0"
        type="number"
        step="any"
        id="bill"
      >
        <template #icon>
          <DollarSign />
        </template>
      </Input>
      <p class="mt-8">Select Tip %</p>
      <div class="grid grid-cols-2 lg:grid-cols-[7rem_7rem_7rem] gap-4 mt-4">
        <button
          v-for="(tip, index) in tips"
          :key="index"
          class="h-12 rounded-md text-center text-2xl py-2 cursor-pointer select-none"
          :class="
            tip === form.tip ? 'bg-teal text-green' : 'bg-green text-white'
          "
          type="button"
          @click="form.tip = tip"
        >
          {{ tip }}%
        </button>
        <button
          v-if="!showCustomTip"
          class="bg-light-blue h-12 rounded-md text-center text-2xl py-2"
          type="button"
          @click="showCustomTip = true"
        >
          Custom
        </button>
        <input
          v-if="showCustomTip"
          v-model="form.tip"
          class="bg-light-blue h-12 rounded-md text-center text-2xl py-2"
          min="0"
          type="number"
          step="any"
        />
      </div>
      <label class="block mt-8" for="people">Number of People</label>
      <Input
        v-model="form.people"
        placeholder="0"
        class="mt-2"
        min="0"
        type="number"
        id="people"
      >
        <template #icon>
          <People />
        </template>
      </Input>
    </div>
    <div
      class="mt-8 bg-green rounded-2xl pt-9 px-6 pb-6 grid grid-rows-[auto_auto_1fr_auto]"
    >
      <div class="flex justify-between items-center">
        <div>
          <p class="text-white">Tip Amount</p>
          <p class="text-gray text-sm">/ person</p>
        </div>
        <p class="text-3xl text-teal">
          ${{ Number(tip).toFixed(2) ?? "0.00" }}
        </p>
      </div>
      <div class="flex justify-between items-center mt-5">
        <div>
          <p class="text-white">Total</p>
          <p class="text-gray text-sm">/ person</p>
        </div>
        <p class="text-3xl text-teal">
          ${{ Number(total).toFixed(2) ?? "0.00" }}
        </p>
      </div>
      <button
        class="uppercase bg-teal text-green w-full rounded-md h-12 mt-8 text-xl disabled:opacity-20 disabled:cursor-not-allowed row-start-4"
        type="button"
        :disabled="formChanged"
        @click="reset"
      >
        Reset
      </button>
    </div>
  </div>
</template>
