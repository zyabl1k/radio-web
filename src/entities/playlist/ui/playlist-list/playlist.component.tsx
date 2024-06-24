import { FunctionComponent, useState } from 'react'
import { useGetPlayListQuery } from '@/entities/playlist/model/playlist.model.ts'
import { useTypedSelector } from '@/shared/hooks/redux/redux.selector.ts'
import { Widget } from '@/widgets'
import { PlaylistCardComponent } from '@/entities/playlist/ui/playlist-card/playlist-card.component.tsx'
import { FaPlus } from 'react-icons/fa'
import { PlaylistCreateModal } from '@/entities/playlist/ui/modal-create/playlist-create.modal.tsx'

export const PlaylistComponent: FunctionComponent = () => {
  const paginationInitial = useTypedSelector((state) => state.PaginationReducer)
  const { data , isLoading } = useGetPlayListQuery(paginationInitial?.playlist);
  const [openModal, setOpenModal] = useState<boolean>(false)

  if (isLoading || !data) {
    return <Widget.Preloader />
  }

  if (data.body.length === 0) {
    return <Widget.Empty
      emoji={'😔'}
      title={'У вас еще нет плэйлистов'}
      description={
        'Вам необходимо добавить плэйлист, что бы они здесь отображались.'
      }
    />
  }

  return (
    <>
      <PlaylistCreateModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="w-full flex flex-col">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-2xl items-start font-bold">Мои плейлисты</h1>
        </div>
        <div className="flex items-start snap-x overflow-x-auto overflow-y-hidden albumHolder justify-start gap-5">
          <div onClick={() => setOpenModal(true)} className="min-w-[220px] bg-root-card-light snap-center hover:bg-root-card-light_hover hover:dark:bg-root-card-dark_hover transition cursor-pointer flex items-center justify-center text-6xl rounded min-h-[220px] dark:bg-root-card-dark">
            <FaPlus />
          </div>
          {
            data.body.map(playlist => (
              <PlaylistCardComponent key={playlist.id} playlist={playlist} />
            ))
          }
        </div>
      </div>
    </>
  )
}