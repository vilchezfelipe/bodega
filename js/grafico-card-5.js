let miGrafica = document.getElementById("miGrafica").getContext("2d");

        var chart = new Chart(miGrafica,{
            type: "bar",
            data:{
                labels:["enero", "febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
                datasets:[
                    {
                        label:"Ventas año 2019",
                        backgroundColor: "rgb(240, 128, 63)",
                        data: [100,100,70,80,90,100,50,20,30,40,50,60]
                    }
                ]
            }
        })
        let miGrafica2 = document.getElementById("miGrafica2").getContext("2d");

        var chart = new Chart(miGrafica2,{
            type: "bar",
            data:{
                labels:["enero", "febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
                datasets:[
                    {
                        label:"Ventas año 2020",
                        backgroundColor: "rgb(240, 128, 63)",
                        data: [50,60,30,50,80,60,20,15,18,10,50,60]
                    }
                ]
            }
        })