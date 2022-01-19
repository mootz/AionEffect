<template>
    <div :class="$style.HomePage">
        <div class="containerWSide">
            <div class="lSide">
                <div :class="$style.balanceWrap">
                    <div class="labelName">
                        {{ $t('profile.balance') }}
                    </div>

                    <div :class="$style.balanceList">
                        <div :class="$style.balanceItem">
                            <BalanceCard type="effect"
                                         :value="user.balance.effect"
                                         @click.native="disableBalance ? openModalEffect() : null"
                            />
                        </div>
                        <div :class="$style.balanceItem">
                            <BalanceCard type="bonus"
                                         :value="user.balance.bonus"
                                         @click.native="disableBalance ? openModalBonus() : null"
                            />
                        </div>
                        <div :class="[$style.balanceItem, $style._kinah]">
                            <BalanceCard type="kinah"
                                         :value="user.balance.kinah"
                                         @click.native="null"
                            />
                        </div>
                    </div>
                </div>

                <div :class="$style.accountWrap">
                    <div class="labelName">
                        {{ $t('profile.myAccount') }}
                    </div>

                    <AccountCard :user="user" />
                </div>

                <div :class="$style.referralWrap">
                    <div class="labelName">
                        {{ $t('referral.name') }}
                    </div>

                    <div :class="$style.referral">
                        <div :class="$style.buttonWrap">
                            <AppButton :text="$t('referral.btn')"
                                       height="100%"
                                       @click.native.stop="copyReferralLink(user.referral.url_key)"
                            />
                        </div>

                        <div :class="$style.number">
                            {{ user.referral.count }}
                        </div>
                        <p :class="$style.rText">
                            {{ $t('referral.invited') }}
                        </p>

                        <div :class="$style.rIcons">
                            <div v-tippy="{ distance: 14 }"
                                 :class="$style.rIconWrap"
                                 :content="$t('referral.giftInfo')"
                                 @click.stop="user.referral.gift > 0 ? openModalListCharacters() : false"
                            >
                                <div v-if="user.referral.gift > 0"
                                     :class="$style.rIconGifts">
                                    {{ user.referral.gift }}
                                </div>
                                <div :class="$style.rIcon">
                                    <svg>
                                        <use xlink:href="#icon-gift" />
                                    </svg>
                                </div>
                            </div>
                            <a v-tippy="{ distance: 14 }"
                               :class="$style.rIconWrap"
                               :content="$t('referral.info')"
                               :href="$t('linkReferralInfo')"
                               target="_blank"
                            >
                                <div :class="$style.rIcon">
                                    <svg>
                                        <use xlink:href="#icon-info" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="rSide">
                <transition name="fade"
                            mode="out-in">
                    <UserData v-if="userPage.dataChange" />

                    <ListCharacters v-else
                                    :characters="user.characters" />

                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import KinahDonation from '@/components/layout/modals/KinahDonation';
    import EffectDonation from '@/components/layout/modals/EffectDonation';
    import BonusDonation from '@/components/layout/modals/BonusDonation';
    import BalanceCard from '@/components/pages/homePage/BalanceCard';
    import AccountCard from '@/components/pages/homePage/AccountCard';
    import ListCharacters from '@/components/pages/homePage/ListCharacters';
    import UserData from '@/components/pages/homePage/UserData';
    import AppButton from '../components/ui/inputs/AppButton';
    import ListCharactersModal from '../components/layout/modals/ListCharactersModal';

    export default {
        name: 'HomePage',
        components: {
            UserData,
            ListCharacters,
            AccountCard,
            BalanceCard,
            AppButton
        },

        // data() {
        //     return {
        //         disableBalance: localStorage['auth.userId'] === '1',
        //     };
        // },

        computed: {
            ...mapState({
                user: state => state.user.user,
                userPage: state => state.user.userPage
            }),
            disableBalance() {
                // return this.user.login === 'Joiz' || this.user.login === '123125215';
                return true;
            }
        },

        methods: {
            openModalKinah() {
                this.$modal.open(KinahDonation);
            },
            openModalEffect() {
                this.$modal.open(EffectDonation);
            },
            openModalBonus() {
                this.$modal.open(BonusDonation);
            },
            openModalListCharacters() {
                this.$modal.open(ListCharactersModal, {referral: true});
            },

            copyReferralLink(id) {
                const url = `${window.location.origin}/profile${this.$i18n.locale === 'en' ? '/en/' : '/'}login/register?userReferral=${id}`;

                this.copyTextToClipboard(url);
            },

            fallbackCopyTextToClipboard(text) {
                const toast = this.$toast;
                // eslint-disable-next-line consistent-this
                const thisHe = this;

                const textArea = document.createElement('textarea');
                textArea.value = text;

                // Avoid scrolling to bottom
                textArea.style.top = '0';
                textArea.style.left = '0';
                textArea.style.position = 'fixed';

                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    const successful = document.execCommand('copy');
                    const msg = successful ? 'successful' : 'unsuccessful';
                    console.log('Fallback: Copying text command was ' + msg);
                    toast.success(thisHe.$t('copy.success'));
                } catch (err) {
                    // eslint-disable-next-line no-alert
                    window.prompt(thisHe.$t('copy.error'), text);
                }

                document.body.removeChild(textArea);
            },
            copyTextToClipboard(text) {
                const toast = this.$toast;
                // eslint-disable-next-line consistent-this
                const thisHe = this;

                if (!navigator.clipboard) {
                    this.fallbackCopyTextToClipboard(text);
                    return;
                }
                navigator.clipboard.writeText(text).then(function() {
                    toast.success(thisHe.$t('copy.success'));
                }, function(err) {
                    console.log(err);
                    // eslint-disable-next-line no-alert,no-invalid-this
                    window.prompt(thisHe.$t('copy.error'), text);
                });
            }
        },
    };
</script>

<style lang="scss" module>
    .balanceWrap {
        margin-bottom: 3.2rem;
    }

    .balanceList {
        display: flex;
        justify-content: space-between;
    }

    .balanceItem {
        width: calc(33% - 1.5rem);
        //pointer-events: none;
    }

    .referralWrap {
        margin-top: 3.2rem;
    }

    .referral {
        display: flex;
        align-items: center;
        padding: 3.2rem;
        border-radius: 40px;
        background-color: $lightdark;
    }

    .rIcons {
        margin-left: auto;
        display: flex;
    }

    .rIconWrap {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.4rem;
        height: 5.4rem;
        margin-right: 1.2rem;
        border-radius: 100%;
        border: 1px solid rgba(#fff, .2);
        transition: $transition;
        cursor: pointer;

        &:hover {
            border-color: #fff;

            .rIcon {
                opacity: 1;
            }
        }

        &:last-child {
            margin-right: 0;
        }

        &._active {
            opacity: 1;
        }
    }

    .rIconGifts {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -.5rem;
        right: -.5rem;
        width: 2.2rem;
        height: 2.2rem;
        background-color: $accent;
        border-radius: 100%;
        font-size: 1.2rem;
        line-height: 1.4rem;
        font-weight: 600;
    }

    .rIcon {
        width: 2.4rem;
        height: 2.4rem;
        fill: #fff;
        transition: $transition;
        opacity: .2;
    }

    .rText {
        font-size: 1.4rem;
        font-weight: bold;
    }

    .number {
        font-size: 3.4rem;
        font-weight: 600;
        margin-right: .6rem;
    }

    .buttonWrap {
        max-width: 20rem;
        height: 5.4rem;
        margin-right: 1rem;
    }
</style>
