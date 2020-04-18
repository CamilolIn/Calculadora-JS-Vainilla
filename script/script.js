window.addEventListener("load", ()=>{

    //VARIABLES GLOBALES /////////////////////////////////////////////

    let t_cero = document.querySelector("#cero")
    let t_uno = document.querySelector("#uno")
    let t_dos = document.querySelector("#dos")
    let t_tres = document.querySelector("#tres")
    let t_cuatro = document.querySelector("#cuatro")
    let t_cinco = document.querySelector("#cinco")
    let t_seis = document.querySelector("#seis")
    let t_siete = document.querySelector("#siete")
    let t_ocho = document.querySelector("#ocho")
    let t_nueve = document.querySelector("#nueve")
    let t_suma = document.querySelector("#suma")    
    let t_resta = document.querySelector("#resta")    
    let t_multiplicacion = document.querySelector("#multiplicacion")    
    let t_division = document.querySelector("#division")    
    let result = document.querySelector("#result")
    let ig = document.querySelector("#igual")
    let br = document.querySelector("#borr")

   

    // FUNCIONES //////////////////////////////////////////////////////


    function cero() {               
        let actual = result.innerHTML
        let sumado = t_cero.innerHTML
        result.innerHTML = actual + sumado
    }

    function uno(){   
        let actual = result.innerHTML
        let sumado = t_uno.innerHTML
        result.innerHTML = actual + sumado
    }

    function dos() {               
        let actual = result.innerHTML
        let sumado = t_dos.innerHTML
        result.innerHTML = actual + sumado
    }

    function tres() {               
        let actual = result.innerHTML
        let sumado = t_tres.innerHTML
        result.innerHTML = actual + sumado
    }

    function cuatro() {               
        let actual = result.innerHTML
        let sumado = t_cuatro.innerHTML
        result.innerHTML = actual + sumado
    }

    function cinco() {               
        let actual = result.innerHTML
        let sumado = t_cinco.innerHTML
        result.innerHTML = actual + sumado
    }

    function seis() {               
        let actual = result.innerHTML
        let sumado = t_seis.innerHTML
        result.innerHTML = actual + sumado
    }

    function siete() {               
        let actual = result.innerHTML
        let sumado = t_siete.innerHTML
        result.innerHTML = actual + sumado
    }

    function ocho() {               
        let actual = result.innerHTML
        let sumado = t_ocho.innerHTML
        result.innerHTML = actual + sumado
    }

    function nueve() {               
        let actual = result.innerHTML
        let sumado = t_nueve.innerHTML
        result.innerHTML = actual + sumado
    }


    function suma(){        
        let actual = result.innerHTML
        let sumado = t_suma.innerHTML
        result.innerHTML = actual + sumado
    }

    function resta(){        
        let actual = result.innerHTML
        let sumado = t_resta.innerHTML
        result.innerHTML = actual + sumado
    }

    function multiplicacion(){        
        let actual = result.innerHTML
        let sumado = t_multiplicacion.innerHTML
        result.innerHTML = actual + sumado
    }

    function division(){        
        let actual = result.innerHTML
        let sumado = t_division.innerHTML
        result.innerHTML = actual + sumado
    }


    function res(e){

        e.preventDefault()
        let actual = result.innerHTML
        

        if(actual.indexOf("+") != -1){
            console.log("Hay signos de suma")
            let arraynumS = actual.split("+", 2)
            console.log(arraynumS)
            let res = parseInt(arraynumS[0]) + parseInt(arraynumS[1])
            console.log(res)
            result.innerHTML = res
        }
        else if(actual.indexOf("-") != -1){
            console.log("Hay signos de resta")
            let arraynumR = actual.split("-", 2)
            console.log(arraynumR)
            let res = parseInt(arraynumR[0]) - parseInt(arraynumR[1])
            console.log(res)
            result.innerHTML = res
        }
        else if(actual.indexOf("-") != -1){
            console.log("Hay signos de resta")
            let arraynumR = actual.split("-", 2)
            console.log(arraynumR)
            let res = parseInt(arraynumR[0]) - parseInt(arraynumR[1])
            console.log(res)
            result.innerHTML = res
        }
        else if(actual.indexOf("*") != -1){
            console.log("Hay signos de multiplicacion")
            let arraynumM = actual.split("*", 2)
            console.log(arraynumM)
            let res = parseInt(arraynumM[0]) * parseInt(arraynumM[1])
            console.log(res)
            result.innerHTML = res
        }
        else if(actual.indexOf("/") != -1){
            console.log("Hay signos de division")
            let arraynumD = actual.split("/", 2)
            console.log(arraynumD)
            let res = parseInt(arraynumD[0]) / parseInt(arraynumD[1])
            console.log(res)
            result.innerHTML = res
        }

    }


    function borrar(e){
        e.preventDefault()
        result.innerHTML = ""

    }


    // EVENTOS //////////////////////////////////////////////////////////////////////////////
    
    t_cero.addEventListener("click", cero)
    t_uno.addEventListener("click", uno)
    t_dos.addEventListener("click", dos)
    t_tres.addEventListener("click", tres)
    t_cuatro.addEventListener("click", cuatro)
    t_cinco.addEventListener("click", cinco)
    t_seis.addEventListener("click", seis)
    t_siete.addEventListener("click", siete)
    t_ocho.addEventListener("click", ocho)     
    t_nueve.addEventListener("click", nueve)     
    t_suma.addEventListener("click", suma)
    t_resta.addEventListener("click", resta)
    t_multiplicacion.addEventListener("click", multiplicacion)
    t_division.addEventListener("click", division)
    ig.addEventListener("click", res)
    br.addEventListener("click", borrar)
    
    
  
})



