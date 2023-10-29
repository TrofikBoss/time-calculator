
function clock_update(t1, t2, t3) {
    document.querySelector("#clock1 .clock__arrow1").style.transform = `rotate(${t1[0] * 360 / 12}deg)`; 
    document.querySelector("#clock1 .clock__arrow2").style.transform = `rotate(${t1[1] * 360 / 60}deg)`; 
    document.querySelector("#clock1 .clock__arrow3").style.transform = `rotate(${t1[2] * 360 / 60}deg)`; 
    document.querySelector("#clock2 .clock__arrow1").style.transform = `rotate(${t2[0] * 360 / 12}deg)`; 
    document.querySelector("#clock2 .clock__arrow2").style.transform = `rotate(${t2[1] * 360 / 60}deg)`; 
    document.querySelector("#clock2 .clock__arrow3").style.transform = `rotate(${t2[2] * 360 / 60}deg)`; 
    document.querySelector("#clock3 .clock__arrow1").style.transform = `rotate(${t3[0] * 360 / 12}deg)`; 
    document.querySelector("#clock3 .clock__arrow2").style.transform = `rotate(${t3[1] * 360 / 60}deg)`; 
    document.querySelector("#clock3 .clock__arrow3").style.transform = `rotate(${t3[2] * 360 / 60}deg)`; 
}
function clock_act(t1, t2, act = "+") {
    let s1 = t1[0] * 3600 + t1[1] * 60 + t1[2];
    let s2 = t2[0] * 3600 + t2[1] * 60 + t2[2];
    let sum;
    if (act == "+") {
        sum = s1 + s2;
    } else if (act == "-") {
        sum = s1 - s2;
    }
    
    let result = [Math.floor(sum / 3600), Math.floor(sum / 60 - Math.floor(sum / 3600) * 60), sum - (Math.floor(sum / 60) * 60)];
    nt1 = [Math.floor(s1 / 3600), Math.floor(s1 / 60 - Math.floor(s1 / 3600) * 60), s1 - (Math.floor(s1 / 60) * 60)];
    nt2 = [Math.floor(s2 / 3600), Math.floor(s2 / 60 - Math.floor(s2 / 3600) * 60), s2 - (Math.floor(s2 / 60) * 60)];
    console.log(sum);
    clock_update(nt1, nt2, result);
}

document.querySelectorAll("#hours1, #min1, #sec1, #hours2, #min2, #sec2, #clockact").forEach((el) => {
    el.onchange = () => {
        if (el.value == "") {
            el.value = 0;
        }
        let x1 = Number(document.querySelector("#hours1").value);
        let x2 = Number(document.querySelector("#min1").value);
        let x3 = Number(document.querySelector("#sec1").value);
        let x4 = Number(document.querySelector("#hours2").value);
        let x5 = Number(document.querySelector("#min2").value);
        let x6 = Number(document.querySelector("#sec2").value);
        let x7 = document.querySelector("#clockact").value;
        clock_act([x1, x2, x3],[x4, x5, x6],x7);
    }
})

clock_update([0, 0, 0], [0, 0, 0], [0, 0, 0]);
