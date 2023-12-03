function display(val){
    document.getElementById('tot').value += val
    document.getElementById('aver').value += val
    document.getElementById('gra').value += val
    document.getElementById('overview').valueL += val   
}
function english(){
    var eng1 = Number(document.getElementById('eng').value)
    var eng2 = Number(document.getElementById('engl').value)
    var eng3 = Number(document.getElementById('engli').value)
    var total = document.getElementById("total1").value = eng1 + eng2 + eng3
    document.getElementById('total1').value = total
}
function math(){
    var tes1 = Number(document.getElementById('math').value)
    var tes2 = Number(document.getElementById('maths').value)
    var tes3 = Number(document.getElementById('mathe').value)
    var tests = document.getElementById("total2").value = tes1 + tes2 + tes3
    document.getElementById('total2').value=tests
}
function computer(){
    var tes1 = Number(document.getElementById('comp').value)
    var tes2 = Number(document.getElementById('compu').value)
    var tes3 = Number(document.getElementById('comput').value)
    var tests = document.getElementById("total3").value = tes1 + tes2 + tes3
    document.getElementById('total3').value=tests
}
function social(){
    var tes1 = Number(document.getElementById('soc').value)
    var tes2 = Number(document.getElementById('soci').value)
    var tes3 = Number(document.getElementById('socia').value)
    var tests = document.getElementById("total4").value = tes1 + tes2 + tes3
    document.getElementById('total4').value=tests
}
function quan(){
    var tes1 = Number(document.getElementById('quant').value)
    var tes2 = Number(document.getElementById('quanti').value)
    var tes3 = Number(document.getElementById('quantit').value)
    var tests = document.getElementById("total5").value = tes1 + tes2 + tes3
    document.getElementById('total5').value=tests
}
function home(){
    var tes1 = Number(document.getElementById('home').value)
    var tes2 = Number(document.getElementById('homes').value)
    var tes3 = Number(document.getElementById('homee').value)
    var tests = document.getElementById("total6").value = tes1 + tes2 + tes3
    document.getElementById('total6').value=tests
}
function agric(){
    var tes1 = Number(document.getElementById('agric').value)
    var tes2 = Number(document.getElementById('agricu').value)
    var tes3 = Number(document.getElementById('agricul').value)
    var tests = document.getElementById("total7").value = tes1 + tes2 + tes3
    document.getElementById('total7').value=tests
}
function islam(){
    var tes1 = Number(document.getElementById('islam').value)
    var tes2 = Number(document.getElementById('islami').value)
    var tes3 = Number(document.getElementById('islamic').value)
    var tests = document.getElementById("total8").value = tes1 + tes2 + tes3
    document.getElementById('total8').value=tests
}
function verbal(){
    var tes1 = Number(document.getElementById('verb').value)
    var tes2 = Number(document.getElementById('verba').value)
    var tes3 = Number(document.getElementById('verbal').value)
    var tests = document.getElementById("total9").value = tes1 + tes2 + tes3
    document.getElementById('total9').value=tests
}
function lit(){
    var tes1 = Number(document.getElementById('lit').value)
    var tes2 = Number(document.getElementById('lite').value)
    var tes3 = Number(document.getElementById('liter').value)
    var tests = document.getElementById("total10").value = tes1 + tes2 + tes3
    document.getElementById('total10').value=tests
}
function student(){
    var stu = document.getElementById('FULLNAME').value
    document.getElementById('FULLNAME').innerHTML = stu 
}
function total(){
    var last1 = document.getElementById('eng').value
    var last2 = document.getElementById('engl').value
    var last3 = document.getElementById('engli').value
    var last4 = document.getElementById('math').value
    var last5 = document.getElementById('maths').value
    var last6 = document.getElementById('mathe').value
    var last7 = document.getElementById('comp').value
    var last8 = document.getElementById('compu').value
    var last9 = document.getElementById('comput').value
    var last10 = document.getElementById('soc').value
    var last11= document.getElementById('soci').value
    var last12 = document.getElementById('socia').value
    var last13 = document.getElementById('quant').value
    var last14 = document.getElementById('quanti').value
    var last15 = document.getElementById('quantit').value
    var last16 = document.getElementById('home').value
    var last17 = document.getElementById('homes').value
    var last18 = document.getElementById('homee').value
    var last19 = document.getElementById('agric').value
    var last20 = document.getElementById('agricu').value
    var last21 = document.getElementById('agricul').value
    var last22 = document.getElementById('islam').value
    var last23 = document.getElementById('islami').value
    var last24 = document.getElementById('islamic').value
    var last25 = document.getElementById('verb').value
    var last26 = document.getElementById('verba').value
    var last27 = document.getElementById('verbal').value
    var last28 = document.getElementById('lit').value
    var last29= document.getElementById('lite').value
    var last30 = document.getElementById('liter').value

    var last31= document.getElementById('total').innerHTML = eval(last1) + eval(last2) + eval(last3) + eval(last4) + eval(last5) + eval(last6) + eval(last7) + eval(last8) + eval(last9) + eval(last10) + eval(last1) + eval(last2) + eval(last3) + eval(last4) + eval(last5) + eval(last6) + eval(last7) + eval(last8) + eval(last9) + eval(last10) + eval(last11) + eval(last12) + eval(last13) + eval(last14) + eval(last15) + eval(last16) + eval(last17) + eval(last18) + eval(last19) + eval(last20) + eval(last21) + eval(last22) + eval(last23) + eval(last24) + eval(last25) + eval(last26) + eval(last27) + eval(last28) + eval(last29) + eval(last30)
    document.getElementById('total').innerHTML = "Your total result is " + last31
}

function average(){
    var last1 = document.getElementById('eng').value
    var last2 = document.getElementById('engl').value
    var last3 = document.getElementById('engli').value
    var last4 = document.getElementById('math').value
    var last5 = document.getElementById('maths').value
    var last6 = document.getElementById('mathe').value
    var last7 = document.getElementById('comp').value
    var last8 = document.getElementById('compu').value
    var last9 = document.getElementById('comput').value
    var last10 = document.getElementById('soc').value
    var last11= document.getElementById('soci').value
    var last12 = document.getElementById('socia').value
    var last13 = document.getElementById('quant').value
    var last14 = document.getElementById('quanti').value
    var last15 = document.getElementById('quantit').value
    var last16 = document.getElementById('home').value
    var last17 = document.getElementById('homes').value
    var last18 = document.getElementById('homee').value
    var last19 = document.getElementById('agric').value
    var last20 = document.getElementById('agricu').value
    var last21 = document.getElementById('agricul').value
    var last22 = document.getElementById('islam').value
    var last23 = document.getElementById('islami').value
    var last24 = document.getElementById('islamic').value
    var last25 = document.getElementById('verb').value
    var last26 = document.getElementById('verba').value
    var last27 = document.getElementById('verbal').value
    var last28 = document.getElementById('lit').value
    var last29= document.getElementById('lite').value
    var last30 = document.getElementById('liter').value

    var last31= document.getElementById('aver').innerHTML = "Your total " + " " + (eval(last1) + eval(last2) + eval(last3) + eval(last4) + eval(last5) + eval(last6) + eval(last7) + eval(last8) + eval(last9) + eval(last10) + eval(last1) + eval(last2) + eval(last3) + eval(last4) + eval(last5) + eval(last6) + eval(last7) + eval(last8) + eval(last9) + eval(last10) + eval(last11) + eval(last12) + eval(last13) + eval(last14) + eval(last15) + eval(last16) + eval(last17) + eval(last18) + eval(last19) + eval(last20) + eval(last21) + eval(last22) + eval(last23) + eval(last24) + eval(last25) + eval(last26) + eval(last27) + eval(last28) + eval(last29) + eval(last30)) /100 * 100
    document.getElementById('aver').innerHTML = 'You have an average score of' + " " + last11 + '%'
}

function grade(){
    var last1 = document.getElementById('eng').value
    var last2 = document.getElementById('engl').value
    var last3 = document.getElementById('engli').value
    var last4 = document.getElementById('math').value
    var last5 = document.getElementById('maths').value
    var last6 = document.getElementById('mathe').value
    var last7 = document.getElementById('comp').value
    var last8 = document.getElementById('compu').value
    var last9 = document.getElementById('comput').value
    var last10 = document.getElementById('soc').value
    var last11= document.getElementById('soci').value
    var last12 = document.getElementById('socia').value
    var last13 = document.getElementById('quant').value
    var last14 = document.getElementById('quanti').value
    var last15 = document.getElementById('quantit').value
    var last16 = document.getElementById('home').value
    var last17 = document.getElementById('homes').value
    var last18 = document.getElementById('homee').value
    var last19 = document.getElementById('agric').value
    var last20 = document.getElementById('agricu').value
    var last21 = document.getElementById('agricul').value
    var last22 = document.getElementById('islam').value
    var last23 = document.getElementById('islami').value
    var last24 = document.getElementById('islamic').value
    var last25 = document.getElementById('verb').value
    var last26 = document.getElementById('verba').value
    var last27 = document.getElementById('verbal').value
    var last28 = document.getElementById('lit').value
    var last29= document.getElementById('lite').value
    var last30 = document.getElementById('liter').value

    var last31= document.getElementById('gra').innerHTML = "Your total " + " " + (eval(last1) + eval(last2) + eval(last3) + eval(last4) + eval(last5) + eval(last6) + eval(last7) + eval(last8) + eval(last9) + eval(last10) + eval(last1) + eval(last2) + eval(last3) + eval(last4) + eval(last5) + eval(last6) + eval(last7) + eval(last8) + eval(last9) + eval(last10) + eval(last11) + eval(last12) + eval(last13) + eval(last14) + eval(last15) + eval(last16) + eval(last17) + eval(last18) + eval(last19) + eval(last20) + eval(last21) + eval(last22) + eval(last23) + eval(last24) + eval(last25) + eval(last26) + eval(last27) + eval(last28) + eval(last29) + eval(last30)) /100 * 100
    if (last31 >= 70) {
        document.getElementById('gra').innerHTML = 'Congratulations' + document.getElementById('FULLNAME').value + ' ' + 'You have A'
    }
    else if (last31 >= 60 && last31 <= 69) {
        document.getElementById('gra').innerHTML = 'You have B'
    }
    else if(last31 >=50 && last31 <= 59){
        document.getElementById('gra').innerHTML = 'You have C'
    }
    else{
        document.getElementById('gra').innerHTML = 'Sorry, you failed'
    }
}

function overview (){
    var last1 = document.getElementById('eng').value
    var last2 = document.getElementById('engl').value
    var last3 = document.getElementById('engli').value
    var last4 = document.getElementById('math').value
    var last5 = document.getElementById('maths').value
    var last6 = document.getElementById('mathe').value
    var last7 = document.getElementById('comp').value
    var last8 = document.getElementById('compu').value
    var last9 = document.getElementById('comput').value
    var last10 = document.getElementById('soc').value
    var last11= document.getElementById('soci').value
    var last12 = document.getElementById('socia').value
    var last13 = document.getElementById('quant').value
    var last14 = document.getElementById('quanti').value
    var last15 = document.getElementById('quantit').value
    var last16 = document.getElementById('home').value
    var last17 = document.getElementById('homes').value
    var last18 = document.getElementById('homee').value
    var last19 = document.getElementById('agric').value
    var last20 = document.getElementById('agricu').value
    var last21 = document.getElementById('agricul').value
    var last22 = document.getElementById('islam').value
    var last23 = document.getElementById('islami').value
    var last24 = document.getElementById('islamic').value
    var last25 = document.getElementById('verb').value
    var last26 = document.getElementById('verba').value
    var last27 = document.getElementById('verbal').value
    var last28 = document.getElementById('lit').value
    var last29= document.getElementById('lite').value
    var last30 = document.getElementById('liter').value

    var last31= document.getElementById('over').innerHTML = "Your total " + " " + (eval(last1) + eval(last2) + eval(last3) + eval(last4) + eval(last5) + eval(last6) + eval(last7) + eval(last8) + eval(last9) + eval(last10) + eval(last1) + eval(last2) + eval(last3) + eval(last4) + eval(last5) + eval(last6) + eval(last7) + eval(last8) + eval(last9) + eval(last10) + eval(last11) + eval(last12) + eval(last13) + eval(last14) + eval(last15) + eval(last16) + eval(last17) + eval(last18) + eval(last19) + eval(last20) + eval(last21) + eval(last22) + eval(last23) + eval(last24) + eval(last25) + eval(last26) + eval(last27) + eval(last28) + eval(last29) + eval(last30)) 


    if (last31 >= 70) {
        document.getElementById('over').innerHTML = 'Congratulations' + document.getElementById('FULLNAME').value + ' ' + 'This is great'
    }
    else if (last31 >= 60 && last31 <= 69) {
        document.getElementById('over').innerHTML = 'You tried'
    }
    else if(last31 >=50 && last31 <= 59){
        document.getElementById('over').innerHTML = 'You can do more'
    }
    else{
        document.getElementById('over').innerHTML = 'This is a poor result'
    }
}
