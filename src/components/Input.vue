<script setup>
import { onMounted, ref } from "vue"
import { v4 as uuid } from "uuid"

defineProps({
  id: {
    type: String,
    default() {
      return `text-input-${uuid()}`
    },
  },
  isInvalid: Boolean,
  label: String,
  type: {
    type: String,
    default: "text",
  },
})

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
  <div :class="$attrs.class">
    <label class="lg:flex items-center justify-between" :for="id">
      <p class="block">{{ label }}</p>
      <p v-if="isInvalid" class="text-red hidden lg:block">Can't be zero</p>
    </label>
    <div class="relative flex items-center mt-2">
      <div class="absolute left-5 pointer-events-none">
        <slot name="icon" />
      </div>
      <input
        :id="id"
        class="bg-light-blue rounded-md pr-5 py-2 pl-10 h-12 text-green text-2xl w-full text-right focus:outline-offset-0"
        :class="
          isInvalid
            ? 'outline-red outline outline-2'
            : 'focus:outline-teal focus:outline-none'
        "
        v-bind="{
          ...$attrs,
          class: null,
        }"
        :type="type"
        v-model="model"
        ref="input"
      />
    </div>
  </div>
  <p v-if="isInvalid" class="text-red mt-2 lg:hidden">Can't be zero</p>
</template>
