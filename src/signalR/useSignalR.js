import * as SignalR from '@microsoft/signalr'
import { onUnmounted, ref } from 'vue';

let connection = null;

export function useSignalR(hubUrl) {
    let isConnected = ref(false)
    let listeners = []

    if(!connection){
       connection = new SignalR.HubConnectionBuilder()
                .withUrl(hubUrl)
                .withAutomaticReconnect()
                .build()

      connection.start()
      .then(() => {
        console.log("SignalR conectado");
        isConnected.value = true
        
      })
      .catch((error) => console.error("Error SignalR", error))
    }

    function on(eventName, callback) {
        connection.on(eventName, callback)
        listeners.push({eventName, callback})
    }

    //limpia los listener (suscripciones/eventos)
    onUnmounted(() => {
        listeners.forEach(l => connection.off(l.eventName, l.callback))
    })

    return { connection, isConnected, on}
}