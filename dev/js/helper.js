class Helper {
    constructor() {}

    realViewportHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
}

const helper = new Helper();

helper.realViewportHeight();
