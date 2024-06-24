import { FunctionComponent, useState } from 'react'
import { useGetMusicListQuery } from '@/entities/music/model/music.model.ts'
import { Widget } from '@/widgets'
import { MusicCardComponent } from '@/entities/music/ui/music-card/music-card.component.tsx'
import { AddMusicModal } from '@/entities/music/ui/modal/add-music.modal.tsx'
import { MusicSettingsComponent } from '@/entities/music/ui/music-settings/music-settings.component.tsx'
import { useTypedSelector } from '@/shared/hooks/redux/redux.selector.ts'
import { Pagination } from 'flowbite-react'
import { useActions } from '@/shared/hooks/redux/redux.actions.ts'

export const MusicListComponent: FunctionComponent = () => {
  const paginationInitial = useTypedSelector((state) => state.PaginationReducer)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { data, isLoading } = useGetMusicListQuery(paginationInitial?.music)
  const { setPageMusic } = useActions();

  if (isLoading || !data) {
    return <Widget.Preloader />
  }

  const onPageChange = (page: number) => {
    setPageMusic(page)
  }

  if (data.body.length === 0) {
    return <Widget.Empty
      emoji={'😔'}
      title={'У вас еще нет музыки'}
      description={
        'Вам необходимо добавить музыку, что бы они здесь отображались.'
      }
    />
  }

  return (
    <>
      <AddMusicModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="w-full flex flex-col">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-4xl items-start font-bold">Коллекция</h1>
          <MusicSettingsComponent setOpenModal={setOpenModal} />
        </div>
        <div className="flex flex-wrap items-center min-w-[1000px] gap-2 justify-start">
          {
            data.body.map(music => (
              <MusicCardComponent key={music.id} music={music} />
            ))
          }
        </div>
        {data.head > 1 && (
          <Pagination
            className="mx-auto mt-2"
            currentPage={paginationInitial?.music}
            totalPages={data.head}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </>
  )
}