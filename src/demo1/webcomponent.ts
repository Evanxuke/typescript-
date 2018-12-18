import '@webcomponents/custom-elements/custom-elements.min';

export class PopUpInfo extends HTMLElement {
    constructor() {
        super();
        this.createShadow();
    }

    createShadow() {
        // 创建一个 shadow root
        var shadow = this.attachShadow({mode: 'open'});

        // 创建一个 spans
        var wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');
        var icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', '0');
        var info = document.createElement('span');
        info.setAttribute('class', 'info');

        // 获取text属性上的内容，并添加到一个span标签内
        var text = this.getAttribute('text');
        info.textContent = text;

        // 插入 icon
        var imgUrl;
        if (this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
        } else {
            imgUrl = 'img/default.png';
        }
        var img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);

        // 创建一些 CSS，并应用到 shadow dom上
        var style = document.createElement('style');

        style.textContent = '.wrapper {' +
            // 简洁起见，省略了具体的CSS
            // 将创建的元素附加到 shadow dom
            shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}