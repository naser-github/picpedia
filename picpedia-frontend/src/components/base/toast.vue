<template>
  <div
    v-if="!isValid"
    id="toast-top-right"
    class="
      absolute
      flex
      items-center
      w-full
      max-w-xs
      p-4
      mt-10
      space-x-4
      text-gray-500
      bg-white
      divide-x divide-gray-200
      rounded-lg
      shadow
      top-5
      right-5
      space-x
    "
    role="alert"
  >
    <div class="text-sm text-red-700 font-normal">{{ msg }}</div>
  </div>
</template>

<script>

export default({
props:['isValid', 'msg']    
})
</script>
