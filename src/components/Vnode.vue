<script>
export default {
    render(createElement){
        return createElement(
            'div',
            {
                class: 'foo',
                style: {
                    color: '#000'
                },
                attrs: {
                    id: 'foo'
                },
                on: {
                    click: this.clickHandler
                }
            },
            [
                '先写一些文字',
                createElement('h1', '一则头条')
            ]
        )
    },
    methods: {
        clickHandler(){
            console.log('clicked');
        }
    }
}
</script>
