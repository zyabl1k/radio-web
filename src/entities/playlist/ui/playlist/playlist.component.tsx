import { FunctionComponent } from 'react'
import { IPlaylistComponent } from '@types'
import { useGetMusicPlaylistQuery, useGetPlaylistByIdQuery } from '@/entities/playlist/model/playlist.model.ts'
import { Widget } from '@/widgets'
import { __APPLICATION__ } from '@/shared/config'
import { MusicCardComponent } from '@/entities/music/ui/music-card/music-card.component.tsx'

export const PlaylistComponent: FunctionComponent<IPlaylistComponent> = ({ name, id }) => {
  const { data, isLoading } = useGetPlaylistByIdQuery(id)
  const { data: musics, isLoading: isLoadingMusic } = useGetMusicPlaylistQuery(name)

  if (isLoading || !data) {
    return <Widget.Preloader />
  }

  if (isLoadingMusic || !musics) {
    return <Widget.Preloader />
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-5 items-start">
        <img className="w-[220px] h-[220px] rounded" src={data.imgPath ? data.imgPath : __APPLICATION__.imgHolderUrl}
          alt="Фото альбома" />
        <div className="flex gap-1 flex-col">
          <h1 className="text-5xl">{data.name}</h1>
          <p className="text-lg text-stone-500">{data.description}</p>
        </div>
      </div>
      {musics.map(music => (
        <MusicCardComponent isPlaylist={true} key={music.id} music={music} />
      ))}
    </div>
  )
}