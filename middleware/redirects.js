export default function({route, redirect}) {
    const pathName = route.path.split('/').filter(item => item);
    if (pathName[pathName.length - 1] === 'shop') {
        redirect('/shop/categories');
    }
}
