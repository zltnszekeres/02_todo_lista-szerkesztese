import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./megjelenit.js";
$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloELEM);
});
