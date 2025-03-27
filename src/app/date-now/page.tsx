import {ClientComponent} from "@/app/date-now/client-component";
import {title} from "@/app/styles";

export default function Page() {
    return (
        <div className={'block text-lg min-h-screen p-8'}>
            <p className={title}>Date.now()</p>
            <p className={'mb-5'}>На сервере Date.now() выведет: {Date.now()}</p>
            <ClientComponent/>
            <p className={'mt-5'}>То, что вы сейчас видите в клиентском компоненте, отличается от того, что попало в изначальную верстку
                (посмотрите изначально полученный html).</p>
            <p>Случился рассинхрон при гидрации, когда на клиенте отрендерился клиентский компонент.</p>
            <p>В итоге ошибка гидрации - Error: Text content does not match server-rendered HTML.</p>
        </div>
    )
}