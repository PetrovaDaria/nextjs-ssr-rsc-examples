'use client'
import { useEffect, useState } from 'react'

export default function ClientOnlyComponent() {
    const [browserInfo, setBrowserInfo] = useState<Record<string, string | boolean>>({})

    useEffect(() => {
        // Этот код будет выполнен только в браузере
        setBrowserInfo({
            userAgent: window.navigator.userAgent,
            platform: window.navigator.platform,
            language: window.navigator.language,
            cookiesEnabled: navigator.cookieEnabled,
            localStorage: typeof window.localStorage !== 'undefined',
            time: new Date().toLocaleTimeString()
        })
    }, [])

    if (!browserInfo) {
        return <div>Инициализация клиентского компонента...</div>
    }

    return (
        <div className={'block client'}>
            <h3 className="text-lg font-medium mb-3">Информация о браузере:</h3>
            <ul className="space-y-2">
                <li><strong>User Agent:</strong> {browserInfo.userAgent}</li>
                <li><strong>Платформа:</strong> {browserInfo.platform}</li>
                <li><strong>Язык:</strong> {browserInfo.language}</li>
                <li><strong>Cookies включены:</strong> {browserInfo.cookiesEnabled ? 'Да' : 'Нет'}</li>
                <li><strong>LocalStorage доступен:</strong> {browserInfo.localStorage ? 'Да' : 'Нет'}</li>
                <li><strong>Время загрузки компонента:</strong> {browserInfo.time}</li>
            </ul>
        </div>
    )
}