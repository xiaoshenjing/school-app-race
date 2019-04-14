<template>
    <div class="footer">
        <div class="icon">
            <i class="material-icons">home</i>
            <i class="font">首页</i>
        </div>
        <div class="icon">
            <i class="material-icons">notifications</i>
            <i class="font">发现</i>
        </div>
        <div class="add">
            <i class="material-icons">control_point</i>
        </div>
        <div class="icon">
            <i class="material-icons">shopping_cart</i>
            <i class="font">购物车</i>
        </div>
        <div class="icon">
            <i class="material-icons">person</i>
            <i class="font">我的</i>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'VFooter'
  }
</script>

<style scoped lang="scss">
    .footer {
        width: 100%;
        background-color: rgba(255, 0, 0, .1);
        position: fixed;
        bottom: 0;
        left: 0;
        height: 48px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .icon {
            width: 40px;
            height: 36px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            flex-grow: 1;

            .material-icons {
                font-size: 24px;
            }

            .font {
                font-size: 8px;
                font-style: normal;
            }
        }

        .add {
            align-self: flex-start;
            width: 50px;
            height: 50px;
            margin-top: -25px;
            background-color: #f00;
            border-radius: 50%;

            .material-icons {
                font-size: 50px;
            }
        }
    }
</style>