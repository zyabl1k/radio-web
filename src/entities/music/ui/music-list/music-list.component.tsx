import { FunctionComponent, useState } from 'react'
import { useGetMusicListQuery } from '@/entities/music/model/music.model.ts'
import { Widget } from '@/widgets'
import { MusicCardComponent } from '@/entities/music/ui/music-card/music-card.component.tsx'
import { MusicEmptyUi } from '@/entities/music/ui/music-empty/music-empty.ui.tsx'
import { AddMusicModal } from '@/entities/music/ui/modal/add-music.modal.tsx'
import { MusicSettingsComponent } from '@/entities/music/ui/music-settings/music-settings.component.tsx'

export const MusicListComponent: FunctionComponent = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { data , isLoading } = useGetMusicListQuery();

  if (isLoading || !data) {
    return <Widget.Preloader />
  }

  if (data.length === 0) {
    return <MusicEmptyUi />
  }

  return (
    <>
      <AddMusicModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="w-full flex flex-col">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-4xl items-start font-bold">Коллекция</h1>
          <MusicSettingsComponent setOpenModal={setOpenModal}/>
        </div>
        <div className="grid items-center md:grid-cols-1 justify-center grid-cols-2 gap-5">
          {
            data.map(music => (
              <MusicCardComponent key={music.id} music={music} />
            ))
          }
        </div>
      </div>
    </>
  )
}