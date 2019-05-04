<template>
    <div class="input-wrapper" :v-rule="v_rule">
        <label for="input" class="label">{{setting.title}}：</label>
        <div class="input">
            <input
                    id="input"
                    class="content"
                    :type="setting.type?setting.type:'text'"
                    :value="value"
                    @input="check($event)"
                    @blur="rule($event.target.value)"
                    @click="rule($event.target.value)"
                    :readonly="setting.readonly?setting.readonly:false"
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
      setting: Object,// *:title rules /:type
      value: [String, Number]
    },
    data () {
      return {
        getRules: '',
        v_rule: false
      }
    },
    watch: {
      value: function (newVal,) {
        this.rule(newVal)
      }
    },
    methods: {
      rule (val) {
        this.setting.rules.find(item => {
          if (typeof item(val) === 'string') {
            this.v_rule = false
            return this.getRules = item(val)
          } else {
            this.getRules = ''
            this.v_rule = true
          }
        })
      },
      check (e) {
        this.$emit('input', e.target.value)
      }
    },
    mounted () {
      this.rule(this.value)
    }
  }
</script>

<style scoped lang="scss">
    .input-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 5px auto;

        .label {
            font-size: 18px;
            color: $font-color-2;
            font-weight: 700;
            margin-right: 20px;
            margin-top: .2rem;
        }

        .input {
            width: 60%;

            .content {
                width: 100%;
                height: 3rem;
                outline: none;
                border: 1px solid $font-color-2;
                border-radius: 5px;
                padding: 5px;
                color: $font-color-1;
                box-sizing: border-box;
            }

            .rules {
                font-size: 12px;
                height: 12px;
                line-height: 12px;
                color: #F56C6C;
                margin-top: 3px;
                text-align: center;
            }
        }
    }
</style>