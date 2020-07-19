<template>
    <div>
        <h1>child</h1>
        <!-- Modal -->
        <div ref="modal" class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here. {{$route.params.id}}</p>
                    </div>
                    <div class="modal-footer">
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
    mounted() {
      console.log('mounted');
      // this.handleClose();
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
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped>

</style>
