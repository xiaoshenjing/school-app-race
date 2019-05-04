<template>
    <div class="clip">
        <div class="preview" :class="{cross:!previewImage.img}">
            <vueCropper
                    ref="cropper"
                    :img="previewImage.img"
                    :outputSize="previewImage.size"
                    :outputType="previewImage.outputType"
                    :autoCropWidth="previewImage.width"
                    :autoCropHeight="previewImage.height"
                    :autoCrop="true"
                    :fixed="true"
                    :canMove="false"
                    v-show="previewImage.img"
            ></vueCropper>
        </div>
        <div class="clip-wrapper">
            <button
                    class="clip"
                    @click="endClip"
                    :style="previewImage.img?'opacity: 1;':'opacity: 0;'"
            >确定剪裁
            </button>
            <div class="form-src">
                <span class="text">{{btn}}</span>
                <input accept="image/*" @change="previewImg($event)" class="btn" type="file">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      btn: String
    },
    data () {
      return {
        previewImage: {
          img: '',
          size: 1,
          outputType: 'jpeg',
          width: '250',
          height: '250',
        },
      }
    },
    methods: {
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
          that.previewImage.width = that.previewImage.height = '250'
          that.previewImage.img = this.result
        }
      },
      endClip () {
        // 获取截图的blob数据
        this.$refs.cropper.getCropBlob((data) => {
          // 获取图片
          this.$emit('getFile', data)

          this.previewImage.width = this.previewImage.height = '300'
        })

        // 获取截图的base64 数据
        this.$refs.cropper.getCropData((data) => {
          this.$emit('getPreviewFile', data)

          this.previewImage.img = data
        })
      },
      clear () {
        this.previewImage.img = ''
        this.$refs.cropper.clearCrop()
      }
    }
  }
</script>

<style scoped lang="scss">
    .clip {
        .preview {
            width: 300px;
            height: 300px;
            background-color: $white;
            position: relative;

            &.cross {
                &:before {
                    height: 100px;
                    width: 10px;
                }

                &:after {
                    width: 100px;
                    height: 10px;
                }

                &:before, &:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 0;
                    transform: translate(-50%, -50%);
                    background-color: #ccc;
                }
            }
        }

        .clip-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;

            %common { // form-src
                width: 40%;
                height: 3rem;
            }

            .clip {
                @extend %common;
                background-color: $font-color-1;
                border-radius: 5px;
                color: $white;
                font-size: 14px;
                border: none;
                outline: none;

                &:active {
                    background-color: $grey;
                }
            }

            .form-src {
                position: relative;
                background-color: $font-color-1;
                border-radius: 5px;
                @extend %common;


                .text {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    @extend %block-center;
                    color: $white;
                    font-size: 14px;
                }

                .btn {
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                }

                &:active {
                    background-color: $grey;
                }
            }
        }
    }
</style>