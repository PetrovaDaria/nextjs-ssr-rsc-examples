import {WithProps} from "@/app/with-props/with-props";
import {title} from "@/app/styles";

export default function Page() {
    return (
        <div className={'block min-h-screen p-8'}>
            <p className={title}>Пропсы</p>
            <p className="text-lg mb-5">Передадим пропсы из серверного компонента в клиентский</p>
            <WithProps fromServer={'Эту строчку серверный компонент передал'}/>
        </div>
    )
}