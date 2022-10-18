/** @type {import('./$types').LayoutLoad} */
export function load() {
    return {
        text: 'hello',
        scrollOpacity: 1,
        sayScroll: ()=> console.log('scroll')
    };
}
