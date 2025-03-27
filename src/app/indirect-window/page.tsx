import {IndirectWindow} from "@/app/indirect-window/indirect-window";
import {title} from "@/app/styles";

export default function Page() {
    return <div className={'block min-h-screen p-8'}>
        <p className={title}>window через хуки</p>
        <div className={'text-lg mb-5'}>На этой странице клиентский компонент обрщается к window не напрямую</div>
        <IndirectWindow/>
    </div>
}