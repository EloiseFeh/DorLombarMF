document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

function funcaoAguda1() {
    document.getElementById("paragrafo1-aguda").innerHTML = "Educação e auto gerenciamento da dor, incluindo:";
    document.getElementById("img-aguda").src="imgs/1-aguda.png";
    document.getElementById("item1-aguda").innerHTML = "<b>Manter-se</b> ativo em sua rotina;";
    document.getElementById("item2-aguda").innerHTML = "Entender sobre a <b>natureza da dor</b>;";
    document.getElementById("item3-aguda").innerHTML = "Usar calor superficial (como <b>compressa morna</b>) como tratamento auxiliar;";
    document.getElementById("button-verde-aguda").style.color = "black";
    document.getElementById("button-verde-aguda").style.borderColor = "#7FCA70";
    document.getElementById("button-verde-aguda").style.background='rgb(143,219,130,0.3)';
    document.getElementById("button-cinza-aguda").style.color = " #666E75";
    document.getElementById("button-cinza-aguda").style.borderColor = "#666E75";
    document.getElementById("button-cinza-aguda").style.background='white';
}
function funcaoAguda2() {
    document.getElementById("paragrafo1-aguda").innerHTML = "Quando a primeira escolha não traz resultados satisfatórios, podem ser prescritos pela equipe de saúde:";
    document.getElementById("img-aguda").src="imgs/2-aguda.png";
    document.getElementById("item1-aguda").innerHTML = "Uso de <b>medicamento</b> para alívio de dor;";
    document.getElementById("item2-aguda").innerHTML = "Tratamento baseado em <b>exercícios físicos</b>;";
    document.getElementById("item3-aguda").innerHTML = "Tratamentos que envolvem terapia manual.";
    document.getElementById("button-verde-aguda").style.color = " #666E75";
    document.getElementById("button-verde-aguda").style.borderColor = "#666E75";
    document.getElementById("button-verde-aguda").style.background='white';
    document.getElementById("button-cinza-aguda").style.color = "black";
    document.getElementById("button-cinza-aguda").style.borderColor = "#7FCA70";
    document.getElementById("button-cinza-aguda").style.background='rgb(143,219,130,0.3)';
}

function funcaoCronica1() {
    document.getElementById("paragrafo1-cronica").innerHTML = "Educação e auto cuidado da dor, incluindo:";
    document.getElementById("img-cronica").src="imgs/1-cronica.png";
    document.getElementById("item1-cronica").innerHTML = "<b>Manter-se</b> ativo em sua rotina;";
    document.getElementById("item2-cronica").innerHTML = "Entender sobre a <b>natureza da dor</b>;";
    document.getElementById("item3-cronica").innerHTML = "Tratamento baseado em <b>exercícios físicos</b>;";
    document.getElementById("item4-cronica").style.display= "block"; 
    document.getElementById("circulo4-cronica").style.display= "inline-block";
    document.getElementById("button-verde-cronica").style.color = "black";
    document.getElementById("button-verde-cronica").style.borderColor = "#7FCA70";
    document.getElementById("button-verde-cronica").style.background='rgb(143,219,130,0.3)';
    document.getElementById("button-cinza-cronica").style.color = " #666E75";
    document.getElementById("button-cinza-cronica").style.borderColor = "#666E75";
    document.getElementById("button-cinza-cronica").style.background='white';
}

function funcaoCronica2() {
    document.getElementById("paragrafo1-cronica").innerHTML = "Quando a primeira escolha não traz resultados satisfatórios, podem ser prescritos por profissionais da equipe de saúde:";
    document.getElementById("img-cronica").src="imgs/2-cronica.png";
    document.getElementById("item1-cronica").innerHTML = "Uso de <b>medicamento</b> para alivio de dor;";
    document.getElementById("item2-cronica").innerHTML = "Terapia manual, acupuntura, técnicas que envolvem mente e corpo tipo yoga e mindfulness;";
    document.getElementById("item3-cronica").innerHTML = "Tratamento com <b>equipe de saúde</b> de diferentes áreas;";
    document.getElementById("item4-cronica").style.display= "none";
    document.getElementById("circulo4-cronica").style.display= "none";
    document.getElementById("button-verde-cronica").style.color = " #666E75";
    document.getElementById("button-verde-cronica").style.borderColor = "#666E75";
    document.getElementById("button-verde-cronica").style.background='white';
    document.getElementById("button-cinza-cronica").style.color = "black";
    document.getElementById("button-cinza-cronica").style.borderColor = "#7FCA70";
    document.getElementById("button-cinza-cronica").style.background='rgb(143,219,130,0.3)';
}