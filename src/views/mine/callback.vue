<template>
    <div class="callback">
        <textarea class="content"></textarea>
        <button class="back-btn">提交反馈</button>
    </div>
</template>

<script>
  export default {
    name: 'callback'
  }
</script>

<style scoped lang="scss">
    .callback {
        width: 100%;
        padding: 30px 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;

        .content {
            display: block;
            margin-bottom: 30px;
            width: 90%;
            height: 10rem;
            border-radius: 20px;
            outline: none;
            padding: 10px;
        }

        .back-btn {
            display: block;
            align-self: flex-end;
            width: 8rem;
            height: 3rem;
            border-radius: 10px;
            outline: none;
            border: none;
            background-color: $black;
            color: $white;
            margin-right: 5px;

            &:active {
                background-color: $orange;
            }
        }
    }
</style>