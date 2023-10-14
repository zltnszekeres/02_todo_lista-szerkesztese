import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";
$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloELEM);
    $(window).on("kesz", (event ) =>{
        let objPeldany = event.detail;
        
        objPeldany.setHatterszin();
        TODOLIST2[index.objPeldany].index= true;

    })

    $(window).on("torles", (event ) =>{
       
       let objPeldany = event.detail;
       
       TODOLIST2.splice(objPeldany.index,1)
        szuloELEM.empty();


        new Megjelenit(TODOLIST2, szuloELEM)
    })
    
});
