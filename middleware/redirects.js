export default function({route, redirect}) {
    const pathName = route.path.split('/').filter(item => item);
    // console.log(route);
    // console.log(pathName);
    if (pathName[pathName.length - 1] === 'shop') {
        redirect('/shop/categories');
    }
    // else if (pathName[0] === 'restore-password') {
    //     console.log('HELLO');
    //     redirect('/login/restore-password222', {token: pathName[pathName.length - 1]});
    // }
}
