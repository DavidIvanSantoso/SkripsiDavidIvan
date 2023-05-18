<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Register Account
                  </p>

                  <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <!-- Username -->
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c"
                          >User ID</label
                        >
                        <input
                          v-model="form.userid"
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <!-- Email -->
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>

                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c"
                          >Username</label
                        >
                        <input
                          v-model="form.username"
                          type="text"
                          id="form3Example3c"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <!-- Password -->
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c"
                          >Password</label
                        >
                        <input
                          v-model="form.password"
                          type="password"
                          id="form3Example4c"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <!-- Confirm Password -->
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4cd"
                          >Confirm Password</label
                        >
                        <input
                          v-model="confirmpass"
                          type="password"
                          id="form3Example4cd"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <!-- <router-link to="/pages/login"> -->
                      <button
                        type="button"
                        class="btn btn-primary btn-lg"
                        @click="createUserRoute(this.form)"
                      >
                        Register
                      </button>
                      <!-- </router-link> -->
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { notify } from '@kyvg/vue3-notification'
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data() {
    return {
      form: {
        userid: '',
        username: '',
        password: '',
        email: '',
        role: 'A',
      },
      confirmpass: null,
    }
  },
  methods: {
    ...mapActions(['createUser']),
    createUserRoute(params) {
      if (params.password != this.confirmpass) {
        console.log(params.password)
        console.log(this.confirmpass)
        notify({
          title: 'Registration Failed',
          text: 'Password and Confirm Password do not match',
          type: 'error',
        })
      } else if (params.password == this.confirmpass) {
        this.createUser(params).then(() => {
          this.$router.push('/pages/login')
        })
      }
    },
  },
}
</script>
