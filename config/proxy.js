export const proxy = () => ({
    '/api': {
        target: 'https://apisite.aioneffect.com',
        pathRewrite: {
            '/api': '',
        },
        changeOrigin: true
    },
});
