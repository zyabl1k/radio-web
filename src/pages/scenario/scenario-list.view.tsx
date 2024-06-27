import { FunctionComponent } from 'react'
import { ScenarioListComponent } from '@/entities/scenario/ui/scenario-list/scenario-list.component.tsx'

const ScenarioListView: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-3xl">Сценарии</h1>
      <ScenarioListComponent />
    </div>
  )
}

export default ScenarioListView;