export default function(context) {
    const pathName = context.route.path.split('/').filter(item => item);

    if (pathName[pathName.length - 1] === 'shop') {
        context.redirect(context.localePath('/shop/categories'));
    }

    // else if (pathName[0] === 'restore-password') {
    //     console.log('HELLO');
    //     redirect('/login/restore-password222', {token: pathName[pathName.length - 1]});
    // }
}
