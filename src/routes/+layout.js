/** @type {import('./$types').LayoutLoad} */
export function load() {
    return {
        text: 'hello',
        sayScroll: ()=> console.log('scroll')
    };
}
