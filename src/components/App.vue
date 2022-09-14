<!-- vue单文件组件 -->
<!-- 模板组件，定义组件的基本结构 -->
<template>
    <div>
        <h1>这是app根组件</h1>
    </div>
</template>

<!-- 定义行为 -->
<script>
    export default{
        data() {
            return {
                
            }
        },
        methods: {
            
        },
    }
</script>

<!-- 样式 -->
<!-- scoped 防止冲突 -->
<style scoped>
    h1{
        color:red;
    }
</style>