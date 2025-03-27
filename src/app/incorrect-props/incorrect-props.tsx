'use client'

type TProps = {
    fromServerFunc: VoidFunction;
}

export const IncorrectProps = ({ fromServerFunc }: TProps) => {
    return (
        <p className={'block client'} onClick={fromServerFunc}>
            Если нажать сюда, то вызовется обработчик onClick
        </p>
    );
}