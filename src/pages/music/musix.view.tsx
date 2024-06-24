import { FunctionComponent } from 'react'
import { MusicListComponent } from '@/entities/music/ui/music-list/music-list.component.tsx'
import { PlaylistComponent } from '@/entities/playlist/ui/playlist-list/playlist.component.tsx'

const MusixView: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <MusicListComponent />
      <PlaylistComponent />
    </div>
  )
}

export default MusixView;