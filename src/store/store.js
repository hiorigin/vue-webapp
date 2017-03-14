const STORAGE_KEY = 'storage_key';
var title = document.getElementsByTagName('title')[0];
var body = document.getElementsByTagName('body')[0];
export default {
    title: title,
    body: body,
    fetch() {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    },
    save(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    },
    setTitle(title) {
        this.title.innerHTML = title;
    }
};