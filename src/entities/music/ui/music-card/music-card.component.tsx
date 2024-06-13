import { FunctionComponent } from 'react'
import { IMusicCardComponent } from '@types'
import { FaPlay } from 'react-icons/fa'
import { SlOptions } from 'react-icons/sl'
import { Dropdown } from 'flowbite-react'
import { useDeleteMusicMutation } from '@/entities/music/model/music.model.ts'

export const MusicCardComponent: FunctionComponent<IMusicCardComponent> = ({ music }) => {
  const [request] = useDeleteMusicMutation();

  const handleDeleteMusic = () => {
    request(music.id)
  }

  return (
    <div className="bg-transparent flex w-full justify-between items-center hover:bg-root-card-light dark:hover:bg-root-card-dark transition rounded p-3 group">
      <div className="flex items-center gap-3">
        <FaPlay className="cursor-pointer" />
        <h1 className="text-ellipsis sm:max-w-[150px] max-w-[250px] overflow-hidden whitespace-nowrap">{music.name}</h1>
      </div>
      <div className="flex items-center gap-5">
        <h1 className="text-stone-500 text-sm">{music.namePLayList === 'All'? 'Нет плейлиста' : music.namePLayList}</h1>
        <div className="flex items-center gap-2">
          <h1 className="group-hover:hidden">{music.timeMusic}</h1>
          <Dropdown arrowIcon={false} className="hidden group-hover:block" inline placement="right-start" label={<SlOptions className="hidden group-hover:block" size={25} />}>
            <Dropdown.Item className="p-2 hover:bg-root-greyLight transition" onClick={handleDeleteMusic}>Удалить</Dropdown.Item>
            <Dropdown.Item className="p-2 hover:bg-root-greyLight transition">Редактировать</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}