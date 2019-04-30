<template>
    <div class="input-wrapper">
        <label for="input" class="label">{{title}}：</label>
        <div class="input">
            <input
                    id="input"
                    class="content"
                    type="text"
                    :value="value"
                    @input="check($event)"
                    @blur="rule($event.target.value)"
            >
            <div class="rules">{{getRules}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: String,
      title: String,
      rules: Array
    },
    data () {
      return {
        getRules: ''
      }
    },
    watch: {
      value: function (newVal,) {
        this.rule(newVal)
      }
    },
    methods: {
      rule (val) {
        this.rules.find(item => {
          if (typeof item(val) === 'string') {
            return this.getRules = item(val)
          } else {
            this.getRules = ''
          }
        })
      },
      check (e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>

<style scoped lang="scss">
    .input-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .label {
            font-size: 18px;
            color: $font-color-1;
            font-weight: 700;
            margin-right: 10px;
            margin-top: .2rem;
        }

        .input {
            width: 50%;

            .content {
                width: 100%;
                height: 3rem;
                border: none;
                outline: none;
                background-color: $font-color-2;
                border-radius: 5px;
                padding: 5px;
                color: $white;
                box-sizing: border-box;
            }

            .rules {
                font-size: 12px;
                line-height: 12px;
                color: #F56C6C;
                margin-top: 5px;
                text-align: center;
            }
        }
    }
</style>