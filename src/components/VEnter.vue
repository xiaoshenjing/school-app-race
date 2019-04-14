<template>
    <transition name="enter">
        <div class="enter" v-show="show">
            <div class="login">
                <div class="select-wrapper">
                    <label for="select">学校：</label>
                    <select name="select" id="select" class="select">
                        <option value="1">华北电力大学</option>
                        <option value="2">河北大学</option>
                        <option value="3">清华大学</option>
                    </select>
                </div>
                <div class="count-wrapper">
                    <label for="count">学号：</label>
                    <input type="text" id="count" class="count">
                </div>
                <div class="password-wrapper">
                    <label for="password">密码：</label>
                    <input type="password" id="password" class="password">
                </div>
                <button class="submit" id="submit" @click="login">提交</button>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'enter',
    computed: {
      show () {
        return !this.$store.state.login
      }
    },
    methods: {
      login () {
        this.$store.commit('login', true)
      }
    }
  }
</script>

<style scoped lang="scss">
    .enter {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        background-color: #fff;
        text-align: right;

        .login {
            width: 80%;
            border: 1px solid $grey;
            margin: 250px auto;
            border-radius: 20px;
            padding: 55px 30px 20px;
            box-sizing: border-box;
            position: relative;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);

            .count-wrapper, .select-wrapper, .password-wrapper {
                margin-bottom: 20px;
                width: 100%;
                @extend %block-center;

                .count, .password, .select {
                    box-sizing: border-box;
                    width: 70%;
                    outline: none;
                    border: 1px solid $grey;
                    margin-left: 10px;
                    height: 30px;
                    padding: 5px 5px 5px 10px;
                    border-radius: 10px;
                }
            }

            .submit {
                border: none;
                outline: none;
                background-color: $black;
                color: $white;
                padding: 5px 20px;
                font-size: 16px;
                border-radius: 10px;
                margin-right: 15px;
                position: relative;

                &:active {
                    &:after {
                        border-radius: 10px;
                        background-color: #fff;
                        opacity: .2;
                        content: ' ';
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        position: absolute;
                    }
                }
            }

            &:before {
                content: '';
                position: absolute;
                top: 15px;
                left: 15px;
                width: 20px;
                height: 20px;
                border: 1px solid $grey;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, .2) inset;
                background-color: #fff;
                border-radius: 50%;
            }

            &:after {
                content: '登陆：';
                position: absolute;
                top: -50px;
                left: 10px;
                font-size: 24px;
                font-weight: 700;
            }
        }

        &.enter-enter-active, &.enter-leave-active {
            transition: all .5s;
        }

        &.enter-enter, &.enter-leave-to {
            opacity: 0;
        }
    }
</style>