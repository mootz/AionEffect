<template>
    <div :class="$style.LightBox">
        <CoolLightBox
            :items="items"
            :index="index"
            :effect="'fade'"
            :slideshow="false"
            :use-zoom-bar="false"
            @close="$emit('close')" />
    </div>
</template>

<script>
    import CoolLightBox from 'vue-cool-lightbox';
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

    export default {
        name: 'LightBox',
        components: {
            CoolLightBox,
        },
        props: {
            items: {
                type: Array,
                default: () => []
            },

            index: {
                type: Number,
                default: null
            }
        },

        // data: function() {
        //     return {
        //         items: [
        //             'https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
        //             'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
        //         ],
        //         index: null
        //     };
        // },
    };
</script>

<style lang="scss" module>
    .LightBox {
        //
    }
</style>
