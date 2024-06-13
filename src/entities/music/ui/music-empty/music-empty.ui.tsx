import { FunctionComponent } from 'react'

export const MusicEmptyUi: FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="px-10 sm:px-10 py-5 dark:bg-root-card-dark bg-root-card-light rounded shadow-xl">
        <div className="flex flex-col gap-3.5 items-center">
          <h1 className="font-bold text-white text-8xl">😔</h1>
          <div className="flex flex-col">
            <h6 className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
              <span className="text-red-500">Упс!</span> У вас еще нет музыки
            </h6>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              Вам необходимо добавить музыку, что бы она здесь отображались.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}