<template>
    <transition name="form-appear"
                @after-enter="$emit('after-enter')"
                @after-leave="$emit('after-leave')">
        <div v-if="visible"
             :class="$style.PaypalDonation">
            <div :class="$style.wrap">
                <div :class="$style.iconWrap">
                    <div :class="$style.icon">
                        <svg width="200"
                             height="54"
                             viewBox="0 0 200 54"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M25.5702 0.00999858C32.0979 0.00999858 38.1211 3.55104 37.297 12.3762C36.2981 22.8644 30.6794 28.6679 21.8144 28.6929H14.068C12.9543 28.6929 12.4149 29.6019 12.1252 31.4648L10.6269 40.9891C10.4021 42.4275 9.66295 43.1367 8.57417 43.1367H1.36724C0.218524 43.1367 -0.181027 42.4026 0.0736876 40.7594L6.02203 2.58712C6.3167 0.709218 7.02092 0.00999858 8.30448 0.00999858H25.5702ZM13.8333 20.4471H19.7017C23.3726 20.3073 25.8099 17.7651 26.0546 13.1803C26.2044 10.3484 24.2916 8.32069 21.25 8.33567L15.7262 8.36065L13.8333 20.4471ZM56.8901 40.215C57.5494 39.6157 58.2186 39.306 58.1237 40.0452L57.889 41.8132C57.7691 42.7372 58.1337 43.2266 58.9928 43.2266H65.3956C66.4744 43.2266 66.9988 42.7921 67.2635 41.124L71.2091 16.3617C71.4089 15.1181 71.1042 14.5088 70.1603 14.5088H63.1181C62.4839 14.5088 62.1742 14.8634 62.0094 15.8323L61.7497 17.3556C61.6148 18.1497 61.2502 18.2895 60.9106 17.4904C59.7169 14.6636 56.6704 13.395 52.4201 13.4949C42.5462 13.6997 35.8886 21.1963 35.1744 30.8055C34.625 38.2372 39.9491 44.0757 46.9712 44.0757C52.0655 44.0757 54.343 42.5774 56.9101 40.23L56.8901 40.215ZM51.5261 36.4043C47.2759 36.4043 44.3142 33.0131 44.9285 28.8577C45.5428 24.7024 49.5184 21.3112 53.7686 21.3112C58.0188 21.3112 60.9805 24.7024 60.3662 28.8577C59.7519 33.0131 55.7813 36.4043 51.5261 36.4043ZM77.2473 14.4289C75.9088 14.4289 75.3644 15.4277 75.789 16.6564L83.8499 40.26L75.9438 51.4924C75.2795 52.4313 75.794 53.2854 76.7279 53.2854H84.0247C84.45 53.3345 84.8805 53.2604 85.2648 53.0718C85.6491 52.8832 85.971 52.5881 86.1923 52.2216L110.985 16.6614C111.749 15.5676 111.389 14.4189 110.136 14.4189H103.228C102.045 14.4189 101.57 14.8884 100.891 15.8723L90.5524 30.8555L85.9326 15.8373C85.6629 14.9283 84.9887 14.4289 83.7451 14.4289H77.2473Z"
                                  fill="white" />
                            <path fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M136.777 0.00999858C143.304 0.00999858 149.328 3.55104 148.504 12.3762C147.505 22.8644 141.886 28.6679 133.021 28.6929H125.28C124.166 28.6929 123.626 29.6019 123.337 31.4648L121.838 40.9891C121.614 42.4275 120.874 43.1367 119.786 43.1367H112.579C111.43 43.1367 111.03 42.4026 111.285 40.7594L117.244 2.57712C117.538 0.699219 118.242 0 119.526 0H136.777V0.00999858ZM125.04 20.4471H130.908C134.579 20.3073 137.016 17.7651 137.261 13.1803C137.411 10.3484 135.498 8.32069 132.456 8.33567L126.933 8.36065L125.04 20.4471ZM168.097 40.215C168.756 39.6157 169.425 39.306 169.33 40.0452L169.095 41.8132C168.976 42.7372 169.34 43.2266 170.199 43.2266H176.602C177.681 43.2266 178.205 42.7921 178.47 41.124L182.416 16.3617C182.615 15.1181 182.311 14.5088 181.367 14.5088H174.335C173.7 14.5088 173.391 14.8634 173.226 15.8323L172.966 17.3556C172.831 18.1497 172.467 18.2895 172.127 17.4904C170.933 14.6636 167.887 13.395 163.637 13.4949C153.763 13.6997 147.105 21.1963 146.391 30.8055C145.842 38.2372 151.166 44.0757 158.188 44.0757C163.282 44.0757 165.559 42.5774 168.127 40.23L168.097 40.215ZM162.738 36.4043C158.487 36.4043 155.526 33.0131 156.14 28.8577C156.754 24.7024 160.73 21.3112 164.98 21.3112C169.23 21.3112 172.192 24.7024 171.578 28.8577C170.963 33.0131 166.988 36.4043 162.738 36.4043ZM192.27 43.2666H184.878C184.749 43.2723 184.621 43.2496 184.502 43.2001C184.383 43.1505 184.277 43.0753 184.191 42.9799C184.104 42.8845 184.04 42.7712 184.003 42.6481C183.965 42.5249 183.955 42.3951 183.974 42.2677L190.467 1.13374C190.529 0.85301 190.684 0.601513 190.907 0.420154C191.13 0.238794 191.408 0.138243 191.695 0.134859H199.087C199.215 0.129108 199.344 0.151818 199.462 0.201374C199.581 0.250929 199.688 0.326102 199.774 0.421525C199.86 0.516949 199.925 0.630267 199.962 0.753384C200 0.8765 200.009 1.00638 199.991 1.13374L193.498 42.2677C193.438 42.5503 193.284 42.8041 193.061 42.9874C192.837 43.1707 192.558 43.2727 192.27 43.2766V43.2666Z"
                                  fill="white" />
                        </svg>
                    </div>
                </div>

                <div :class="$style.content">
                    <h5 :class="$style.title">
                        PayPal
                    </h5>

                    <p :class="$style.desc">
                        {{ $t('paypalModal.desc1') }}
                    </p>

                    <p :class="$style.desc">
                        {{ $t('paypalModal.desc2') }} <span :class="$style.accent">Joiz#1886</span>
                    </p>

                    <p :class="$style.desc">
                        {{ $t('paypalModal.desc3') }}
                    </p>

                    <div :class="$style.btn">
                        <AppButton :text="$t('paypalModal.btn')"
                                   reverse
                                   height="5.4rem"
                                   @click.native="backToModal"

                        />
                    </div>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>

    import AppButton from '@/components/ui/inputs/AppButton';
    import EffectDonation from '@/components/layout/modals/EffectDonation';
    export default {
        components: {AppButton},
        props: {
            visible: Boolean,

            data: {
                type: Object,
                default: () => ({}),
            },
        },

        methods: {
            openModal() {
                // this.$modal.open(FormExample2, {classList: 'is-article'});
            },
            closeModal() {
                this.$modal.close();
            },
            backToModal() {
                this.$modal.open(EffectDonation);
            }
        }
    };
</script>

<style lang="scss" module>
    .PaypalDonation {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        pointer-events: none;
        background-color: $lightdark;

        &:global(.form-appear-enter-active) {
            transition: transform .8s;
        }

        &:global(.form-appear-leave-active) {
            transition: transform .4s;
        }

        &:global(.form-appear-enter),
        &:global(.form-appear-leave-to) {
            transform: translateX(110%);
        }
    }

    .wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 37.8rem;
        pointer-events: all;
        overflow: auto;
    }

    .iconWrap {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 100%;
        height: 10rem;
        background: linear-gradient(58.62deg, #009ee3 -16.8%, #1651c1 63.36%);
    }

    .icon {
        width: 8rem;
        height: 8rem;
        fill: #fff;
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 3.2rem;
    }

    .title {
        margin-bottom: 3.2rem;
        font-size: 1.6rem;
        font-weight: 500;
    }

    .desc {
        margin-bottom: 2.4rem;
        font-size: 1.4rem;
        color: rgba(#fff, .4);
        font-weight: 500;
    }

    .btn {
        margin: 0 0 0 auto;
        width: 10.2rem;
    }

    .accent {
        opacity: 1;
        color: #fff;
        font-weight: bold;
    }
</style>
