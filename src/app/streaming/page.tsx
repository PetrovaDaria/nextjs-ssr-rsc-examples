import { Suspense } from "react";
import {title} from "@/app/styles";

async function fakeFetchData() {
    await new Promise((res) => setTimeout(res, 3000)); // Имитация задержки
    return "🔥 Данные загружены!";
}

async function SlowComponent() {
    const data = await fakeFetchData();
    return <div className={'block text-lg'}>
        <p>Компонент получил данные, его html отправился нам</p>
        <p>{data}</p>
    </div>;
}

export default function Page() {
    return (
        <div className={'block'}>
            <p className={title}>Стриминг</p>
            <p className={'text-lg mb-5'}>Этот заголовок загрузится мгновенно.</p>

            <Suspense fallback={<p className={'text-lg'}>⏳ Сейчас видим фолбэк Suspense, пока компонент на сервере что-то делает... </p>}>
                <SlowComponent />
            </Suspense>
        </div>
    );
}