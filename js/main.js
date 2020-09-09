document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

function funcaoAguda2() {
    document.getElementById("paragrafo1-aguda").innerHTML = "Quando a primeira escolha não traz resultados satisfatórios, podem ser prescritos pela equipe de saúde:";
    document.getElementById("img-aguda").src="imgs/2-aguda.png";
    document.getElementById("item1-aguda").innerHTML = "Uso de <b>medicamento</b> para alívio de dor;";
    document.getElementById("item2-aguda").innerHTML = "Tratamento baseado em <b>exercícios físicos</b>;";
    document.getElementById("item3-aguda").innerHTML = "Tratamentos que envolvem terapia manual.";
    document.getElementById("button-verde").style.color = " #666E75";
    document.getElementById("button-verde").style.borderColor = "#666E75";
    document.getElementById("button-verde").style.background='white';
    document.getElementById("button-cinza").style.color = "black";
    document.getElementById("button-cinza").style.borderColor = "#7FCA70";
    document.getElementById("button-cinza").style.background='rgb(143,219,130,0.3)';
}

function funcaoAguda1() {
    document.getElementById("paragrafo1-aguda").innerHTML = "Educação e auto gerenciamento da dor, incluindo:";
    document.getElementById("img-aguda").src="imgs/1-aguda.png";
    document.getElementById("item1-aguda").innerHTML = "<b>Manter-se</b> ativo em sua rotina;";
    document.getElementById("item2-aguda").innerHTML = "Entender sobre a <b>natureza da dor</b>;";
    document.getElementById("item3-aguda").innerHTML = "Usar calor superficial (como <b>compressa morna</b>) como tratamento auxiliar;";
    document.getElementById("button-verde").style.color = "black";
    document.getElementById("button-verde").style.borderColor = "#7FCA70";
    document.getElementById("button-verde").style.background='rgb(143,219,130,0.3)';
    document.getElementById("button-cinza").style.color = " #666E75";
    document.getElementById("button-cinza").style.borderColor = "#666E75";
    document.getElementById("button-cinza").style.background='white';
}