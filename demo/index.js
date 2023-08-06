
function Render(obj, root) {
    const el = document.createElement(obj.tag);

    if (typeof obj.children === 'string') {
        const text = document.createTextNode(obj.children);
        el.appendChild(text);
    }
    else if (obj.children) {
        obj.children.forEach((child) => Render(child, el));
    }

    root.appendChild(el);
}

document.addEventListener("readystatechange", (event) => {
    console.log(event.target.readyState);
    if (event.target.readyState === 'complete') {
        const obj = {
            tag: 'div',
            children: [
                {
                    tag: 'span',
                    children: 'hello world'
                }
            ]
        };

        Render(obj, document.body);
    }
});

