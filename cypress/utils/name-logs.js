export function nameLogs(name, text) {
    const names = [
        {
            key: 'acessar',
            value: 'ACESSANDO'
        },
        {
            key: 'preencher',
            value: 'PREENCHENDO'
        },
        {
            key: 'confirmar',
            value: 'CONFIRMAR'
        },
        {
            key: 'finalizar',
            value: 'FINALIZANDO'
        },
    ]

    return ` ${names.find(n => n.key === name).value}: ${text}`
}