'use client'

type TProps = {
    fromServerFunc: () => Promise<unknown>;
}

export const WithServerFunction = ({fromServerFunc}: TProps) => {
    return (
        <div className={'block client'}>
        <p className={"text-lg"} onClick={async () => {
            const res = await fromServerFunc();
           alert(res);
        }}>
            Если нажать сюда, то вызовется обработчик onClick, в котором вызывается Server Function
        </p>
        </div>
    );
}