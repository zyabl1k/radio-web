import { FunctionComponent } from 'react'
import { IPlaylistCardComponent } from '@types'
import { __APPLICATION__ } from '@/shared/config'
import { SlOptions } from 'react-icons/sl'
import { Dropdown } from 'flowbite-react'
import { useDeletePlaylistMutation } from '@/entities/playlist/model/playlist.model.ts'
import { Link } from 'react-router-dom'

export const PlaylistCardComponent: FunctionComponent<IPlaylistCardComponent> = ({ playlist }) => {
  const [request] = useDeletePlaylistMutation();

  const handleDeletePlaylist = () => {
    return request(playlist.id)
  }

  return (
    <div className="snap-center cursor-pointer min-w-[220px] max-w-[220px]">
      <Link to={`playlist/${playlist.name}/${playlist.id}`}>
        <img className="w-[220px] h-[220px] rounded hover:opacity-50 transition" src={playlist.imgPath ? playlist.imgPath : __APPLICATION__.imgHolderUrl} alt="Фото альбома" />
      </Link>
      <div className="flex flex-col items-start justify-start text-start">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <h1 className="font-bold mt-2 text-xl">{playlist.name}</h1>
            <Dropdown arrowIcon={false} inline placement="right-start" label={<SlOptions size={25} />}>
              <Dropdown.Item onClick={handleDeletePlaylist} className="p-2 hover:bg-root-greyLight transition">Удалить</Dropdown.Item>
              <Dropdown.Item className="p-2 hover:bg-root-greyLight transition">Редактировать</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <h2 className="text-stone-500 font-thin text-sm">{playlist.description}</h2>
      </div>
    </div>
  )
}