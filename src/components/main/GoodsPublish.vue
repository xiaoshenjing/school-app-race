<template>
    <div class="publish-wrapper">
        <div class="title">{{select.name[select.num]}}:</div>
        <div class="form">
            <div class="preview">
                <div v-for="(item,index) in previewImages" :key="index" class="item">
                    <canvas width="300" height="0"></canvas>
                </div>
            </div>
            <div class="form-src">
                <span class="text">点击上传图片</span>
                <input accept="image/*" class="btn" type="file" @change="previewImg($event)">
            </div>
            <label class="form-item" for="title"><span>商品名称：</span>
                <input class="text" type="text" id="title" v-model="form.title">
            </label>
            <label class="form-item" for="desc"><span>商品描述：</span>
                <textarea class="textarea" id="desc" v-model="form.desc"></textarea>
            </label>
            <label class="form-item" for="price"><span>商品价格：</span>
                <input class="text" type="number" id='price' v-model="form.price">
            </label>
            <button class="submit" @click="publish">发布商品</button>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      select: {
        type: Object
      }
    },
    data () {
      return {
        form: {
          desc: '',
          price: '',
          max_count: '',
          imgFile: [],
          title: '',
          time: '',
        },
        previewImages: []
      }
    },
    methods: {
      publish () {
        console.log(123)
      },
      previewImg (e) {
        let file = e.target.files[0]
        let that = this
        if (!e || !window.FileReader) {
          alert('您的设备不支持图片预览功能，如需该功能请升级您的设备！')
        }
        let reader = new FileReader()
        if (file) {
          reader.readAsDataURL(file)
        }
        reader.onload = function () {
          that.previewImages.push(this.result)
        }
        this.form.imgFile.push(file)
      }
    }
  }
</script>

<style scoped lang="scss">
    .publish-wrapper {
        width: 90%;
        margin: 20px auto;
        border: 1px solid $grey;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        padding: 20px 0 20px;
        position: relative;

        .title {
            position: absolute;
            top: 0;
            left: 2rem;
            z-index: 1;
            transform: translateY(-50%);
            background-color: #fff;
            font-size: 16px;
            padding: 0 10px;
            color: $grey;
        }

        .form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            %common { // form-src
                width: 100%;
                height: 3rem;
            }

            .form-src {
                position: relative;
                background-color: $font-color-1;
                border-radius: 5px;
                @extend %common;
                margin: 20px 0;

                .text {
                    @extend %common;
                    position: absolute;
                    top: 0;
                    left: 0;
                    @extend %block-center;
                    color: $white;
                    font-size: 16px;
                }

                .btn {
                    @extend %common;
                    opacity: 0;
                }
            }

            .form-item {
                color: $grey;
                font-size: 16px;
                margin: 10px 0;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                span {
                    white-space: nowrap;
                }

                .text, .textarea {
                    width: 60%;
                    border-radius: 5px;
                    border: 1px solid $grey;
                    outline: none;
                    padding: 5px;
                }

                .text {
                    height: 2rem;
                }

                .textarea {
                    height: 9rem;
                }
            }

            .submit {
                margin-top: 20px;
                color: $white;
                align-self: flex-end;
                border-radius: 5px;
                border: none;
                outline: none;
                width: 10rem;
                height: 3rem;
                background-color: $black;

                &:active {
                    background-color: $grey;
                }
            }
        }
    }
</style>