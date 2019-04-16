<template>
    <div class="mine">
        <div class="bg">
            <div class="avatar"></div>
        </div>
        <div class="title">
            <i class="material-icons">cake</i>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'mine'
  }
</script>

<style scoped lang="scss">
    .mine {
        .bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 180px;
            background-color: $black;
            border-bottom-right-radius: 40%;
            border-bottom-left-radius: 40%;
            z-index: -1;

            .avatar {
                position: fixed;
                top: 50px;
                left: 50%;
                transform: translateX(-50%);
                width: 60px;
                height: 60px;
                background-color: #fff;
                border-radius: 50%;
            }
        }

        .title {
            width: 80%;
            height: 80px;
            background-color: #fafafa;
            margin: 130px auto 0;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, .3);
        }
    }
</style>