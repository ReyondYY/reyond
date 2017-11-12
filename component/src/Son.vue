<template>
    <div>
        Son.vue
        <button @click="hello">按钮</button>
    </div>
</template>

<style>

</style>

<script>
export default {
    data:function () {
        return {
            son:''
        }
    },
    props:['yy','aa'],
    created: function () {
        console.log(this)
    },
    methods:{
        hello:function () {
            // 子组件向父组件传值
            // $emit里面有两个参数
            // 1: 方法名(标识符)
            // 2: 要穿的值
            this.$emit('sendApp','son发来的礼物')
        }
    }
}
</script>
