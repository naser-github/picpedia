<template>
  <section
    class="
      block
      p-6
      m-6
      max-w
      bg-white
      rounded-lg
      border border-gray-200
      shadow-md
      hover:bg-gray-100
      dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
    "
  >
    <h5
      class="
        mb-2
        text-2xl
        font-bold
        tracking-tight
        text-gray-900
        dark:text-white
      "
    >
      Add More Image
    </h5>

    <form>
      <div class="relative z-0 mt-3 mb-6 p-4 max-w-full group">
        <input
          type="text"
          v-model="imageUrl"
          class="
            block
            py-2.5
            px-0
            w-full
            text-sm text-gray-900
            bg-transparent
            border-0 border-b-2 border-gray-300
            appearance-none
            dark:text-white dark:border-gray-600 dark:focus:border-blue-500
            focus:outline-none focus:ring-0 focus:border-blue-600
            peer
          "
          placeholder=" "
          required=""
        />
        <label
          for="imageUrl"
          class="
            absolute
            text-sm text-gray-500
            duration-300
            transform
            -translate-y-6
            scale-75
            top-3
            -z-10
            origin-[0]
            peer-focus:left-0
            peer-focus:text-blue-600
            peer-focus:dark:text-blue-500
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-6
          "
          >Image Url</label
        >
      </div>

      <img v-if="imageUrl" :src=imageUrl>

      <button
        type="submit"
        class="
          text-white
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
          font-medium
          rounded-lg
          text-sm
          w-full
          sm:w-auto
          px-5
          py-2.5
          text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
      >
        Upload
      </button>
    </form>
  </section>
</template>