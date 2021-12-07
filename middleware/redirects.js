export default function({route, redirect}) {
    const pathName = route.path.split('/').filter(item => item);
    console.log(pathName);
    console.log(route);
    if (pathName[pathName.length - 1] === 'shop') {
        redirect('/shop/categories');
    } else if (route.path.includes('accept-registration')) {
        redirect('/login/accept-reg');
    }
}
