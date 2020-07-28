<script>

export default {
    render(createElement){
        let headingId = this.getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^-|-$)/g, '');

        return createElement(
            'h' + this.level,
            [
                createElement('a', {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    methods: {
        getChildrenTextContent (children) {
            return children.map(function (node) {
                return node.children
                ? getChildrenTextContent(node.children)
                : node.text
            }).join('')
            }
    }
}
</script>

