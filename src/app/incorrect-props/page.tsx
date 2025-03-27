import {
    IncorrectProps
} from "@/app/incorrect-props/incorrect-props";

/*
Хотела обернуть клиентский компонент в Error Boundary, но это не сработает, так как
ошибка о невозможности передавать функции в клиентские компоненты возникает на этапе рендеринга серверного компонента,
а не в момент выполнения клиентского кода.
ErrorBoundary ловит только ошибки в рендере, жизненном цикле и методах обработки событий клиентских компонентов

даже try-catch в серверном компоненте не поможет
ошибка возникает на уровне сериализации Next.js, а не в коде JavaScript, который можно обернуть в try/catch.
Когда ты передаешь несериализуемые данные, Next.js даже не начнет рендеринг страницы — он просто упадет при сборке данных для передачи в клиент.
 */

export default function Page() {
    let content;
    try {
        content = (
                <IncorrectProps fromServerFunc={() => console.log('У нас получилось!')}/>
        );
    } catch (error) {
        console.error("Ошибка при передаче пропсов в клиентский компонент:", error);
        content = <>
            <p>Тут должен был быть клиентский компонент, но мы передали в него проп в виде функции, и теперь вы видите
                этот фолбэк! Смотри консоль, чтобы посмотреть, с какой ошибкой все упало.</p>
        </>;
    }


    return (
        <>
            <p>Попробуем передать через пропсы  из серверного в клиентский компонент что-нибудь несериализуемое, например функцию.</p>
            {content}
        </>
    )
}