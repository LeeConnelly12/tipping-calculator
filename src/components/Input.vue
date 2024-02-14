<script setup>
import { onMounted, ref } from "vue"

const model = defineModel({
  type: String,
  required: true,
})

const input = ref(null)

onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus()
  }
})

defineOptions({
  inheritAttrs: false,
})

defineExpose({ focus: () => input.value.focus() })
</script>

<template>
  <div class="relative flex items-center" :class="$attrs.class">
    <div class="absolute left-5 pointer-events-none">
      <slot name="icon" />
    </div>
    <input
      class="bg-light-blue rounded-md pr-5 py-2 pl-10 h-12 text-green text-2xl w-full text-right"
      v-bind="{ ...$attrs, class: null }"
      v-model="model"
      ref="input"
    />
  </div>
</template>
