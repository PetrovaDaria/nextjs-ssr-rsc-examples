import dynamic from 'next/dynamic'
import {title} from "@/app/styles";

// Динамически импортируем компонент с отключенным SSR
const ClientOnlyComponent = dynamic(
    () => import('./client-component'),
    {
        ssr: false,
        loading: () => <p>Загрузка клиентского компонента...</p>
    }
)

export default function Page() {
    return (
        <div className="min-h-screen p-8">
            <h1 className={title}>No SSR</h1>

            <ClientOnlyComponent />

            <div className="mt-8">
                <p className="text-lg">
                    Этот пример использует <code>dynamic</code> из <code>next/dynamic</code> с опцией <code>ssr: false </code>
                    для загрузки компонента только на стороне клиента. Компонент не будет рендериться на сервере
                    и загрузится только когда понадобится в браузере.
                </p>
            </div>
        </div>
    )
}
