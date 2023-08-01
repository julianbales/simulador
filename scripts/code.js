var h;

function suma(){
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("tj-na").value);
    var maf = a - (b * 1.12);
    if (c === 1) {

        cuotas = maf / 5;
        entrega = b * 1.12;
        pentrega= (b * 100 / a).toFixed(2);
        document.getElementById("pentrega").innerHTML = "(" + pentrega + "%)";
        document.getElementById("monto").innerHTML =maf.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("entregata").innerHTML =b.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("cuotasta").innerHTML =cuotas.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        Ltitulo = "Tarjeta Naranja";
        Lmonto = "Monto a Financiar:";
        Lentrega = "Monto de entrega";
        Lcuotas = "5 cuotas de:";
        document.getElementById("Ltitulo").innerHTML =Ltitulo.toLocaleString('es-ES');
        document.getElementById("Lmonto").innerHTML =Lmonto.toLocaleString('es-ES');
        document.getElementById("Lentrega").innerHTML =Lentrega.toLocaleString('es-ES');
        document.getElementById("Lcuotas").innerHTML =Lcuotas.toLocaleString('es-ES');
        ts = "¿Le gano a la inflación?";
        document.getElementById("ts").innerHTML =ts.toLocaleString('es-ES');
        
        var incrementoMensual = 0.084;
        var porcentajeIncremento = 1 + incrementoMensual;
        var porcentajeFinanciado = 1;
        var PFuturo = a * Math.pow(porcentajeIncremento, 5);
        var PFinanciado = a * porcentajeFinanciado;
        var PPagar = ((PFinanciado / PFuturo) * 100).toFixed(2);
        var seisCuotas = (PFinanciado / 5);
          
          var c1=  seisCuotas / (Math.pow(porcentajeIncremento, 1));
          var c2=  seisCuotas / (Math.pow(porcentajeIncremento, 2));
          var c3=  seisCuotas / (Math.pow(porcentajeIncremento, 3));
          var c4=  seisCuotas / (Math.pow(porcentajeIncremento, 4));
          var c5=  seisCuotas / (Math.pow(porcentajeIncremento, 5));
          
        var CAValor = c1 + c2 + c3 + c4 + c5;
        var PPPActual = ((CAValor / a) * 100).toFixed(2);
        CAValor = CAValor.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
  
     








        
    } else
    if (c === 2) {
        montoaf = a - b;
        entrega = b;
        cuotas = montoaf / 6;
        a30 = (30 * a) / 100;
        mensaje = "El monto debe ser mayor a 30% del precio de lista";

        if (entrega < a30){
            document.getElementById("mensaje").innerHTML =mensaje.toLocaleString('es-ES');
            document.getElementById("a30").innerHTML = "El monto mínimo es: " + a30.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        } else{
            pentrega= (b * 100 / a).toFixed(2);
            document.getElementById("pentrega").innerHTML = "(" + pentrega + "%)";
            document.getElementById("monto").innerHTML =montoaf.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
            document.getElementById("entregata").innerHTML =entrega.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
            document.getElementById("cuotasta").innerHTML =cuotas.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
            Ltitulo = "Tarjeta Bancarizada a 6 cuotas sin interés";
            Lmonto = "Monto a Financiar:";
            Lentrega = "Monto de entrega";
            Lcuotas = "6 cuotas de:";
            document.getElementById("Ltitulo").innerHTML =Ltitulo.toLocaleString('es-ES');
            document.getElementById("Lmonto").innerHTML =Lmonto.toLocaleString('es-ES');
            document.getElementById("Lentrega").innerHTML =Lentrega.toLocaleString('es-ES');
            document.getElementById("Lcuotas").innerHTML =Lcuotas.toLocaleString('es-ES');    

        }
       
    } else
    if (c === 3) {
        
        cuotas = (maf * 1.15) / 6;
        entrega = b * 1.12;
        pentrega= (b * 100 / a).toFixed(2);
        document.getElementById("pentrega").innerHTML = "(" + pentrega + "%)";
        document.getElementById("monto").innerHTML =maf.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("entregata").innerHTML =b.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("cuotasta").innerHTML =cuotas.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        Ltitulo = "Tarjeta Bancarizada 6 cuotas con interés";
        Lmonto = "Monto a Financiar:";
        Lentrega = "Monto de entrega";
        Lcuotas = "6 cuotas de:";
        document.getElementById("Ltitulo").innerHTML =Ltitulo.toLocaleString('es-ES');
        document.getElementById("Lmonto").innerHTML =Lmonto.toLocaleString('es-ES');
        document.getElementById("Lentrega").innerHTML =Lentrega.toLocaleString('es-ES');
        document.getElementById("Lcuotas").innerHTML =Lcuotas.toLocaleString('es-ES');
    } else
    if (c === 4) {
        cuotas = (maf * 1.35) / 12;
        entrega = b * 1.12;
        pentrega= (b * 100 / a).toFixed(2);
        document.getElementById("pentrega").innerHTML = "(" + pentrega + "%)";
        document.getElementById("monto").innerHTML =maf.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("entregata").innerHTML =b.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("cuotasta").innerHTML =cuotas.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        Ltitulo = "Tarjeta Bancarizada 12 cuotas con interés";
        Lmonto = "Monto a Financiar:";
        Lentrega = "Monto de entrega";
        Lcuotas = "12 cuotas de:";
        document.getElementById("Ltitulo").innerHTML =Ltitulo.toLocaleString('es-ES');
        document.getElementById("Lmonto").innerHTML =Lmonto.toLocaleString('es-ES');
        document.getElementById("Lentrega").innerHTML =Lentrega.toLocaleString('es-ES');
        document.getElementById("Lcuotas").innerHTML =Lcuotas.toLocaleString('es-ES');
    } else
    if (c === 5) {
        cuotas = (maf * 1.55) / 18;
        entrega = b * 1.12;
        pentrega= (b * 100 / a).toFixed(2);
        document.getElementById("pentrega").innerHTML = "(" + pentrega + "%)";
        document.getElementById("monto").innerHTML =maf.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("entregata").innerHTML =b.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("cuotasta").innerHTML =cuotas.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        Ltitulo = "Tarjeta Bancarizada 18 cuotas con interés";
        Lmonto = "Monto a Financiar:";
        Lentrega = "Monto de entrega";
        Lcuotas = "18 cuotas de:";
        document.getElementById("Ltitulo").innerHTML =Ltitulo.toLocaleString('es-ES');
        document.getElementById("Lmonto").innerHTML =Lmonto.toLocaleString('es-ES');
        document.getElementById("Lentrega").innerHTML =Lentrega.toLocaleString('es-ES');
        document.getElementById("Lcuotas").innerHTML =Lcuotas.toLocaleString('es-ES');
    }
    else
    if (c === 6) {
        cuotas = (maf * 1.30) / 10;
        entrega = b * 1.12;
        pentrega= (b * 100 / a).toFixed(2);
        document.getElementById("pentrega").innerHTML = "(" + pentrega + "%)";
        document.getElementById("monto").innerHTML =maf.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("entregata").innerHTML =b.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("cuotasta").innerHTML =cuotas.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        Ltitulo = "Tarjeta Naranja 10 cuotas";
        Lmonto = "Monto a Financiar:";
        Lentrega = "Monto de entrega";
        Lcuotas = "10 cuotas de:";
        document.getElementById("Ltitulo").innerHTML =Ltitulo.toLocaleString('es-ES');
        document.getElementById("Lmonto").innerHTML =Lmonto.toLocaleString('es-ES');
        document.getElementById("Lentrega").innerHTML =Lentrega.toLocaleString('es-ES');
        document.getElementById("Lcuotas").innerHTML =Lcuotas.toLocaleString('es-ES');


    }

    else
    if (c === 7) {
        cuotas = (maf * 1) / 3;
        entrega = b * 1.12;
        pentrega= (b * 100 / a).toFixed(2);
        document.getElementById("pentrega").innerHTML = "(" + pentrega + "%)";
        document.getElementById("monto").innerHTML =maf.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("entregata").innerHTML =b.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("cuotasta").innerHTML =cuotas.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        Ltitulo = "Tarjeta Naranja Plan Z";
        Lmonto = "Monto a Financiar:";
        Lentrega = "Monto de entrega";
        Lcuotas = "3 cuotas de:";
        document.getElementById("Ltitulo").innerHTML =Ltitulo.toLocaleString('es-ES');
        document.getElementById("Lmonto").innerHTML =Lmonto.toLocaleString('es-ES');
        document.getElementById("Lentrega").innerHTML =Lentrega.toLocaleString('es-ES');
        document.getElementById("Lcuotas").innerHTML =Lcuotas.toLocaleString('es-ES');

        
    }

    else
    if (c === 8) {
        cuotas = (maf * 1) / 3;
        entrega = b * 1.12;
        pentrega= (b * 100 / a).toFixed(2);
        document.getElementById("pentrega").innerHTML = "(" + pentrega + "%)";
        document.getElementById("monto").innerHTML =maf.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("entregata").innerHTML =b.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        document.getElementById("cuotasta").innerHTML =cuotas.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
        Ltitulo = "Tarjeta Bancarizada 3 cuotas";
        Lmonto = "Monto a Financiar:";
        Lentrega = "Monto de entrega";
        Lcuotas = "3 cuotas de:";
        document.getElementById("Ltitulo").innerHTML =Ltitulo.toLocaleString('es-ES');
        document.getElementById("Lmonto").innerHTML =Lmonto.toLocaleString('es-ES');
        document.getElementById("Lentrega").innerHTML =Lentrega.toLocaleString('es-ES');
        document.getElementById("Lcuotas").innerHTML =Lcuotas.toLocaleString('es-ES');

        
    }

    document.getElementById("suma").textContent = suma;
}