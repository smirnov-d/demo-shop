<template>
    <div>
        <h1>child</h1>
        <!-- Modal -->
        <div v-if="news" ref="modal" class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{news.name}} - {{news.id}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" v-html="news.description"></div>
                    <div class="modal-footer">
                        <nuxt-link :to="`/news/${news.id - 1}`">Prev</nuxt-link>
                        <nuxt-link :to="`/news/${news.id + 1}`">Next</nuxt-link>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "child",
    validate ({ params, store }) {
      return store.getters['products/ids'].includes(+params.id)
    },
    computed: {
      // todo: check the best practices for a Method-style Getters with nuxt
      news() {
        return this.$route.params.id ? this.$store.getters['products/getProductById'](this.$route.params.id) : null
      },
    },
    activated() {
      console.log('activated');
      new bootstrap.Modal(this.$refs.modal).show()
      this.$refs.modal.addEventListener('show.bs.modal', function (e) {
        console.log('modal show');
      })
      this.$refs.modal.addEventListener('hide.bs.modal', function (e) {
        console.log('modal hide');
      })
      this.$refs.modal.addEventListener('hidden.bs.modal', (e) => {
        console.log('modal hidden');
        this.handleClose()
      });
    },
    deactivated() {
      console.log('deactivated');
      new bootstrap.Modal(this.$refs.modal).hide()
      // todo: remove event listeners
    },
    methods: {
      handleClose () {
        // this.$router.go(-1)
        this.$router.push('/news')
      },
    }
  }
</script>

<style scoped>

</style>
