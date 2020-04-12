<template>
    <p>{{message}}</p>
</template>

<script>
    // export default - chcemy aby komponentent był  eskportowany domyślnie
    export default {
        data() {
            return {
                message: "Hello in example component"
            }
        }
    }
</script>
<style>
    p {
        color: #41B883;
    }
</style>
