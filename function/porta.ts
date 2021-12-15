import PortaModel from "../model/portas";

export function criarPortas(qntd: number, portaComPresente: number): PortaModel[] {
    return Array.from({ length: qntd }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresente

        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], modifcada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === modifcada.numero

        if(igualAModificada) {
            return modifcada
        } else {
            return modifcada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}