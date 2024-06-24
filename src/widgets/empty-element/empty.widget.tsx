import { FunctionComponent } from 'react'
import { IEmpty } from '@types'

export const EmptyWidget: FunctionComponent<IEmpty> = ({
  emoji,
  title,
  description,
}) => {
  return (
    <div className="mt-[20px] flex items-center justify-center">
      <div className="bg-root-light rounded px-10 py-5 shadow-xl dark:bg-root-card-dark sm:px-10">
        <div className="flex flex-col items-center gap-3.5">
          <h1 className="text-8xl font-bold text-white">{emoji}</h1>
          <div className="flex flex-col">
            <h6 className="md:text-3xl mb-2 text-center text-2xl font-bold text-white">
              <span className="text-red-500">Упс!</span> {title}
            </h6>
            <p className="md:text-lg mb-8 text-center text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
