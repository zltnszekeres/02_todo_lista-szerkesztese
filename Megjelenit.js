import MegjelenitSor from "./MegjelenitSor.js";

class Megjelenit {
    #list = [];
    constructor(list, szuloElem) {
        this.#list = list;
        szuloElem.append(
            '<table class="table table-bordered table-striped  ">'
        );
        this.tablaElem = szuloElem.children("table");

        this.tablazatbaIr();
        $(window).on("torles", (event) => {
            console.log(event.detail);
            this.#list.splice(event.detail, 1);
            console.log(this.#list);
        });
    }
    tablazatbaIr() {
        for (let index = 0; index < this.#list.length; index++) {
            const elem = this.#list[index];

            new MegjelenitSor(elem, this.tablaElem);
        }
    }
}
export default Megjelenit;
