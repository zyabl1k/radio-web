import { FunctionComponent } from 'react'
import { useGetScenarioListQuery } from '@/entities/scenario/model/scenario.model.ts'
import { useTypedSelector } from '@/shared/hooks/redux/redux.selector.ts'
import { Widget } from '@/widgets'
import { Pagination } from 'flowbite-react'
import { useActions } from '@/shared/hooks/redux/redux.actions.ts'
import { ScenarioCardComponent } from '@/entities/scenario/ui/scenario-card/scenario-card.component.tsx'

export const ScenarioListComponent: FunctionComponent = () => {
  const paginationInitial = useTypedSelector((state) => state.PaginationReducer)
  const { data, isLoading } = useGetScenarioListQuery(paginationInitial?.scenario);
  const { setPageScenario } = useActions();

  if (isLoading || !data) {
    return <Widget.Preloader />
  }

  const onPageChange = (page: number) => {
    setPageScenario(page)
  }

  return (
    <>
      <div className="w-full flex items-center flex-wrap gap-5">
        {data.body.map(scenario => (
          <ScenarioCardComponent scenario={scenario} key={scenario.id} />
        ))}
      </div>
      {data.head > 1 && (
        <Pagination
          className="mx-auto mt-2"
          currentPage={paginationInitial?.scenario}
          totalPages={data.head}
          onPageChange={onPageChange}
        />
      )}
    </>
  )
}