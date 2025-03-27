'use client'

export const ClientComponent = () => {
    return (
        <div className={'block client'}>
            <p>На клиенте Date.now() выведет: {Date.now()}</p>
        </div>
    )
}