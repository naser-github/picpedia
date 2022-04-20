/* eslint-disable vue/multi-word-component-names */
<template>
  <section class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="
        block
        p-6
        w-96
        bg-white
        rounded-lg
        border border-gray-200
        shadow-md
        hover:bg-gray-100
      "
    >
      <div class="border-b border-gray-300 mb-4">
        <div class="grid grid-cols-2 gap-4">
          <!-- sign in  -->
          <div class="flex justify-center">
            <button
              type="button"
              class="
                px-6
                py-2.5
                mr-2
                mb-2
                text-sm
                hover:underline
                border border-gray-300
                focus:outline-none focus:ring-4 focus:ring-gray-200
                font-medium
                rounded-lg
              "
              :class="`${
                currentPage
                  ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500'
                  : 'text-gray-900 bg-white'
              }`"
              @click="onClick(true)"
            >
              Sign In
            </button>
          </div>

          <!-- sign up -->
          <div class="flex justify-center">
            <button
              type="button"
              class="
                px-6
                py-2.5
                mr-2
                mb-2
                text-sm
                hover:underline
                border border-gray-300
                focus:outline-none focus:ring-4 focus:ring-gray-200
                font-medium
                rounded-lg
              "
              :class="`${
                !currentPage
                  ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500'
                  : 'text-gray-900 bg-white'
              }`"
              @click="onClick(false)"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <form @submit.prevent="submitForm">
        <!-- email -->
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Email</label
          >
          <input
            v-model.trim="email"
            type="email"
            id="email"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
            "
            placeholder="x@x.com"
          />
        </div>

        <!-- password -->
        <div class="mb-6">
          <label
            for="password"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Password</label
          >
          <input
            v-model.trim="password"
            type="password"
            id="password"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
            "
          />
        </div>

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
          "
        >
          {{ currentPage ? "Sign In" : "Sign Up" }}
        </button>
      </form>
    </div>

    <!-- Toast -->
    <toast :isValid="isValid" :msg="msg"></toast>
  </section>
</template>

<script>
import toast from "../../components/base/toast.vue";
export default {
  components: { toast },
  data() {
    return {
      currentPage: true,
      msg: "",
      email: "",
      password: "",
    };
  },

  computed: {
    isValid() {
      return this.$store.getters["isValid"];
    },
  },

  methods: {
    onClick(val) {
      if (this.currentPage != val) {
        this.currentPage = !this.currentPage;
      }
    },

    toaster() {
      this.$store.dispatch("updateIsValid");
    },

    submitForm() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.msg = "Wrong Input";
        this.$store.dispatch("updateIsValid");
        setTimeout(this.toaster, 1000);
        return;
      }

      this.$store
        .dispatch("login", {
          page: this.currentPage,
          email: this.email,
          password: this.password,
        })
        .then(this.$router.replace("/homepage"))
        .catch((err) => {
          this.error = err.message || "Failed to authenticate";
        });
    },
  },

  created() {
    if (this.$store.getters.getToken) {
      this.msg = "Already Logged In";
      this.isValid = false;
      setTimeout(this.toaster, 1000);
      this.$router.replace("/homepage");
    }
  },
};
</script>
