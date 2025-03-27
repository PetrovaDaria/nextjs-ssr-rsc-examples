import {DirectWindow} from "@/app/direct-window/direct-window";
import {title} from "@/app/styles";

export default function Page( ) {
    return <div className={'block min-h-screen p-8'}>
        <p className={title}>window напрямую</p>
        <div className={'text-lg mb-5'}>На этой странице клиентский компонент обрщается к window напрямую</div>
        <DirectWindow/>
    </div>
}