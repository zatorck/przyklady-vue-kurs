<template>
  <div class="row">
    <input
      @input="update"
      class="input"
      :class="inputClass"
      :name="name"
      :type="type"
      :value="text"
      :placeholder="placeholder"/>
  </div>
</template>
<script>
  export default {
    model: {
      prop: 'text',
      event: 'update'
    },
    methods: {
      update(event) {
        this.$emit('update', event.currentTarget.value)
      }
    },
    computed: {
      inputClass() {
        return {
          invalid: this.invalid
        }
      }
    },

    props: {
      name: {
        type: String
      },
      type: {
        type: String,
        default: 'text'
      },
      text: {
        required: true
      },
      placeholder: {
        type: String
      },
      invalid: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
