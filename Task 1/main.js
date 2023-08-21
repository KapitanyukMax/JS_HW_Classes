//Task 1
class CssClass {
    constructor(name, styles) {
        if (typeof name === "string") this.name = name;
        if (Array.isArray(styles)) this.styles = styles;
    }

    setStyle(styleName, styleValue) {
        this.styles.push({styleName, styleValue});
    }

    removeStyle(styleName) {
        this.styles.splice(this.styles.findIndex(style => style.styleName === styleName), 1);
    }

    getCss() {
        let cssString = `.${this.name} {\n`;
        for (let {styleName, styleValue} of this.styles) {
            cssString += `    ${styleName}: ${styleValue};\n`;
        }
        cssString += "}";

        return cssString;
    }
}

let cssClass = new CssClass("element", [
    {styleName: "width", styleValue: "200px"},
    {styleName: "height", styleValue: "150px"},
    {styleName: "margin", styleValue: "0 auto"},
    {styleName: "padding", styleValue: "10px"},
    {styleName: "background-color", styleValue: "#000"}
]);

cssClass.setStyle("color", "white");
cssClass.removeStyle("padding");
alert(cssClass.getCss());

//Task 2
class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        document.write(`<button style="width: ${this.width};
                                       height: ${this.height};">
                            ${this.text}
                        </button>`);
    }
}

let button1 = new Button("200px", "150px", "Hello");
button1.showBtn();

let button2 = new Button("100px", "150px", "Bye");
button2.showBtn();

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);

        this.color = color;
    }

    showBtn() {
        document.write(`<button style="width: ${this.width};
                                       height: ${this.height};
                                       background-color: ${this.color};">
                            ${this.text}
                        </button>`);
    }
}

let bootstrapButton = new BootstrapButton("200px", "200px", "Button", "blue");
bootstrapButton.showBtn();

//Task 3
class ExtendedDate extends Date {
    showDate() {
        alert(`${this.getDay()}.${this.getMonth()}`);
    }

    isFutureOrPresent() {
        return this >= new Date();
    }

    isLeapYear() {
        let year = this.getFullYear();
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }

    getNextDate() {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + 1);
    }
}

let date1 = new ExtendedDate(2020, 3, 15);
alert(`date1: ${date1}`);
date1.showDate();
alert(`date1.isFutureOrPresent(): ${date1.isFutureOrPresent()}`);
alert(`date1.isLeapYear(): ${date1.isLeapYear()}`);
alert(`date1.getNextDate(): ${date1.getNextDate()}`);

let date2 = new ExtendedDate(2100, 0, 31);
alert(`date2: ${date2}`);
date2.showDate();
alert(`date2.isFutureOrPresent(): ${date2.isFutureOrPresent()}`);
alert(`date2.isLeapYear(): ${date2.isLeapYear()}`);
alert(`date2.getNextDate(): ${date2.getNextDate()}`);