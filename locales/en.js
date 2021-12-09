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
        }
    }
};
