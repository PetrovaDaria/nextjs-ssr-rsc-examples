'use client'

type TProps = {
    fromServer: string;
}

export const WithProps = ({ fromServer }: TProps) => {
    return (
        <div className={'block client text-lg'}>
            <p>Это клиентский компонент</p>
            <p>
                И он показывает проп, полученный от сервера &#34;{fromServer}&#34;
            </p>
        </div>
    );
}