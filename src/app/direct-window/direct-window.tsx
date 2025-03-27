'use client'

export const DirectWindow = () => {
    return (
        <div className={'block client text-lg'}>
            <p>window.innerWidth: {String(window.innerWidth)}</p>
            <p>HTML этой страницы возвращает 500ку, так как на сервере возникает ошибка <code>ReferenceError: window is not defined</code>.</p>
            <p>При изначальной загрузке html клиент получит ноль верстки в html.</p>
            <p>По полученному RSC-payload на клиенте восстанавливается DOM-дерево, выполняются клиентские компоненты и в итоге мы все-таки получаем корректное отображение.</p>
        </div>
    )
}