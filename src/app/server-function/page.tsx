import {myServerFunction} from "@/app/server-function/my-server-function";
import {WithServerFunction} from "@/app/server-function/with-server-function";
import {title} from "@/app/styles";

export default function Page() {
    return (
        <div className={'block min-h-screen p-8'}>
            <p className={title} >Server Function</p>
            <p className={'text-lg mb-5'}>Попробуем передать через пропсы  из серверного в клиентский компонент Server function.</p>
            <WithServerFunction fromServerFunc={myServerFunction.bind(null, {something: 'передали какие-то args'})}/>
        </div>
    )
}