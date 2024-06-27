import { FunctionComponent } from 'react'
import { IScenarioCardComponent } from '@types'

export const ScenarioCardComponent: FunctionComponent<IScenarioCardComponent> = ({scenario}) => {
  return (
    <div className="dark:bg-root-card-dark p-3 bg-root-card-light hover:scale-105 transition cursor-pointer rounded">
      <h1>{scenario.name}</h1>
    </div>
  )
}