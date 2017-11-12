<template>
    <div>
        <h1> APP.vue组件</h1>

        <!-- <img src="./images/demo.jpg" alt=""> -->

        <Son yy="1" :aa="msg" @sendApp="world"></Son>


        sjdfoisifjsfoisifjsf

    </div>
</template>

<script>
    import Son from './Son.vue'
    export default {
        data:function () {
            return {
                msg:'给son的礼物'
            }
        },
        components: {
            // Son:Son
            Son
        },
        methods:{
            world:function (data) {
                console.log(data)
            }
        }
    }
</script>

<style>
    h1{
        color:red;
    }
</style>


