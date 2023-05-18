<!-- eslint-disable prettier/prettier -->
<template>
  <div class="row">
    <section class="vh-100" style="background-color: #eee">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div
                    class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-2"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>

                    <form class="mx-1 mx-md-4">
                      <!-- USERID -->
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>

                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c"
                            >User ID</label
                          >
                          <input
                            v-model="form.user"
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <!-- FULL NAME -->
                      <!-- <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>

                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c"
                            >Full Name</label
                          >
                          <input
                            v-model="form.username"
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                          />
                        </div>
                      </div> -->
                      <!-- Password -->
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c"
                            >Password</label
                          >
                          <input
                            v-model="form.pwd"
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <!-- Role -->
                      <!-- <div class="row px-4">Role</div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-check mt-3 mx-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Creator
                          </label>
                        </div>
                        <div class="form-check mt-3 mx-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            User
                          </label>
                        </div>
                      </div> -->
                      <!-- Button -->
                      <div
                        class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                      >
                        <!-- <router-link to="/project/index"> -->
                        <button
                          type="button"
                          class="btn btn-primary btn-lg"
                          @click="loginConfirm(this.form)"
                        >
                          Login
                        </button>
                        <!-- </router-link> -->
                      </div>
                      <div class="row">
                        <p>
                          Dont Have Account? Click
                          <router-link to="/pages/register">Here!</router-link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  components: {},
  name: 'Login',
  data() {
    return {
      form: {
        user: '',
        pwd: '',
      },
    }
  },
  methods: {
    ...mapActions(['userLogin']),
    loginConfirm(params) {
      this.userLogin(params)
        .then(() => {
          this.$notify({
            title: 'Login Success',
            type: 'success',
          })
          this.$router.push('/project/index')
        })
        .catch(() => {
          this.$notify({
            title: 'Login Failed',
            type: 'error',
            text: 'Wrong Username or Password',
          })
        })
    },
  },
  computed: {
    ...mapState(['userAuth']),
  },
}
</script>

<style></style>
