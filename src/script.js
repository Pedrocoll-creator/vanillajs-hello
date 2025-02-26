window.onload = function() {
  
    let first = "Un(a) ";
    let adj = ["de dos cabezas ", "nuclear ", "enojado(a) ", "solitario(a) ", "loco(a) ", "brillante ", "maloliente ", "lento(a) ", "viejo(a) "];
    let noun = ["corredor(a) ", "mapache ", "perro ", "mercader ", "conductor(a) ", "comediante ", "piña "];
    let action = ["tomó mi ", "tiró mi ", "gritó a mi ", "pateó mi ", "robó mi ", "quemó mi ", "mordió mi ", "golpeó mi "];
    let possession = ["dedo del pie ", "auto ", "reloj ", "zapato ", "billetera ", "camisa ", "llaves ", "computadora ", "teléfono ", "sándwich "];
    let where = ["en la calle", "en mi casa", "en mi entrada", "delante de la oficina", "cerca del centro comercial", "cerca del baño", "en la estación de autobuses"];
  
    let rdm1 = Math.floor(Math.random() * adj.length);
    let rdm2 = Math.floor(Math.random() * noun.length);
    let rdm3 = Math.floor(Math.random() * action.length);
    let rdm4 = Math.floor(Math.random() * possession.length);
    let rdm5 = Math.floor(Math.random() * where.length);
  
    document.querySelector("#excuse").innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possession[rdm4] + where[rdm5];
};
