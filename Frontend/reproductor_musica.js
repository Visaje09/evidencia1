const reproductorMusica = {
    estado : "apagado" ,
     

    play : function(cancion){
        if(this.estado === "apagado"){
            console.log(`Comenzando Reproduccion de cancion ${cancion}`)

            this.estado = "prendido"
        }else{
            console.log(`...Cancion en ejecucion: Stop para terminar`)
        }
        
    },
    stop : function(){
        if(this.estado === "apagado"){
            console.log(`Reproductor ya esta apagado`)
        }else{
            console.log(`Apagando Reproductor`)
            this.estado = "apagado"
        }
    }
    ,
    getEstado : function (){
        return this.estado
    }
    ,
    setEstado : function (estado) {
        this.estado = estado
    }
    
}

reproductorMusica.play("Gatubela");
reproductorMusica.stop();
reproductorMusica.stop();