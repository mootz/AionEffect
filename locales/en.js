export default {
    linkRule: 'https://forum.aioneffect.com/index.php?/topic/96-general-project-rules/',

    classes: {
        0: 'Warrior',
        1: 'Gladiator',
        2: 'Templar',
        3: 'Scout',
        4: 'Assassin',
        5: 'Ranger',
        6: 'Mage',
        7: 'Sorcerer',
        8: 'Spiritmaster',
        9: 'Cleric',
        10: 'Priest',
        11: 'Chanter',
        12: 'Technist',
        13: 'Aethertech',
        14: 'Gunner',
        15: 'Muse',
        16: 'Songweaver',
    },

    monthsRu: '2',

    login: {
        mainTitle: 'Authorization',

        login: {
            label: 'Login',
            placeholder: 'Enter username',
        },
        password: {
            label: 'Password',
            placeholder: 'Enter password'
        },
        remember: 'Remember me',
        forgot: 'Forgot your password?',
        btn: 'Login',
        register: 'Create account'
    },

    registration: {
        mainTitle: 'Registration',

        login: {
            label: 'Login',
            placeholder: 'Enter username',
        },
        email: {
            label: 'Mail',
            placeholder: 'Enter email address',
        },
        password: {
            label: 'Password',
            placeholder: 'Enter password'
        },
        passconf: {
            label: 'Repeat password',
            placeholder: 'Enter password'
        },
        conf: {
            label: 'Repeat password',
            placeholder: 'Enter password'
        },
        loginAlso: 'I already have an account',
        remember: 'Remember me',
        forgot: 'Forgot your password?',
        btn: 'Create account',
        register: 'Create account'
    },

    forgot: {
        mainTitle: 'Recover password',
        desc: 'Please enter the email address of your account, you will be sent an email with your registration details.',

        email: {
            label: 'Mail',
            placeholder: 'Enter email address',
        },
        btn: 'Submit',
    },

    restorePass: {
        mainTitle: 'Enter new password',

        password: {
            label: 'New password',
            placeholder: 'Enter new password',
        },
        passconf: {
            label: 'Repeat new password',
            placeholder: 'Enter new password',
        },
        btn: 'Submit',
    },

    acceptReg: {
        mainTitle: 'Congratulations!',
        desc1: 'Account registered successfully.',
        desc2: 'You can now log into your personal account.',
        btn: 'Login',
    },

    checkRegister: {
        mainTitle: 'Check your mail',
        desc1: 'We have sent you an email with a link',
        desc2: 'to activate your account',
        desc3: 'Didn\'t receive your email?',
        desc4: 'Check your spam filter or try a different email address',
        btn: 'Login',
    },

    header: {
        title: {
            profile: {
                title: 'My profile',
                desc: 'Account Information'
            },
            shop: {
                title: 'Shop',
                desc: 'Unique items'
            }
        },
        forum: 'Forum',
        help: 'Support',
        menu: {
            promo: 'Promo code',
            history: 'History',
            logout: 'Change account',
            exit: 'Exit'
        }
    },

    sideBar: {
        profile: 'My profile',
        shop: 'Shop',
        achievements: 'Achievements',
        rating: 'Rating',
        fortune: 'Wheel of Fortune'
    },

    profile: {
        balance: 'Balance',
        myAccount: 'My Account',
        listCharacters: 'List of characters',
        level: 'Lvl.',

        accountCard: {
            lastLogin: 'Last login to your personal account',
            changePass: 'Change password',
            registration: 'Registration'
        }
    },

    checkbox: {
        accept: 'I have read',
        rules: 'rules'
    },

    promoModal: {
        title: 'Activating a promo code',
        desc: 'If you have a promo code, you can activate it here.',
        code: {
            label: 'Promocode',
            placeholder: 'Enter code'
        },
        btn: 'Activate',
    },

    userData: {
        changePass: {
            title: 'Change Password',
            password: {
                label: 'New password',
                placeholder: 'Enter new password'
            },
            passconf: {
                label: 'Repeat new password',
                placeholder: 'Enter new password'
            },
            btn: 'Change password'
        },
        changeEmail: {
            title: 'Change mailing address',
            email: {
                label: 'New mail',
                placeholder: 'Enter mail'
            },
            btn: 'Change mail'
        }
    },

    notif: {
        listChar: {
            accept: 'The character has been successfully sent to the capital',
            errOnline: 'To use this function, the character must be out of the game'
        },

        userData: {
            accept: 'A confirmation email was sent to the account email address'
        },

        acceptReg: {
            accept: 'Account registered successfully'
        },

        changeEmail: {
            accept: 'Account email has been successfully updated'
        },

        changePassword: {
            accept: 'Account password was updated successfully'
        },

        forgot: {
            accept: 'A confirmation email was sent to the specified account email address'
        },

        restorePass: {
            accept: 'Your password has been successfully changed'
        },

        paymentMeth: {
            error: 'Payment error. Please try again later ',
            accept: 'Payment was successful, thanks for donation!'
        },
        ruleEffect: {
            error: 'You must agree to the donation rules'
        },
        bonusModal: {
            accept: 'Exchange was successful'
        }
    },

    effectModal: {
        desc: 'When donating, you receive 10% of the amount in the form of bonuses.',
        paymentMethod: 'Payment method',
        label: 'Number of coins',
        accept1: 'I agree with',
        accept2: 'donation rules',
        btn: 'Continue'
    },

    effectRules: {
        title: 'Donation Rules',
        desc1: 'By making a donation, you are not buying any product or service.',
        desc2: 'To show our gratitude, we reward donors in exchange for their support.',
        desc3: 'Coin of Effect is a donation reward from a private individual.',
        desc4: 'Donations are used to keep the server running and improve the project.',
        desc5: 'All transactions made are final and non-refundable.',
        btn: 'Back'
    },

    paypalModal: {
        desc1: 'The administration of the Aion Effect project unfortunately cannot add an automatic payment processor via PayPal. Therefore it was decided to process payments manually through Discord.',
        desc2: 'Contact the main administrator of the project',
        desc3: 'Write that you want to fund your purse via PayPal, be sure to specify the login of your account and the amount to be credited.',
        btn: 'Back'
    },

    bonusModal: {
        title: 'How can I get a Bonus?',
        desc1: 'For every hour you play, we give you 5 bonuses.',
        desc2: 'When donating, you receive 10% of the amount in the form of bonuses.',
        title2: 'Exchange your bonuses',
        desc3: '10 bonuses can be exchanged for Coin of Effect ',
        calc1: 'Your balance',
        calc2: 'To exchange',
        calc3: 'You will receive',
        calc4: 'Remainder',
        btn: 'Exchange'
    },

    history: {
        tabs: {
            account: 'Account',
            donate: 'Donations',
            promo: 'Promo Code'
        },
        account: {
            action: 'Action',
            date: 'Date'
        },
        donate: {
            date: 'Date',
            method: 'Method',
            count: 'Amount',
            status: 'Status'
        }
    }
};
