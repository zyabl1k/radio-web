import { FunctionComponent } from 'react'
import { PiMusicNotesPlusFill } from 'react-icons/pi'
import { IMusicSettingsComponent } from '@types'
import { FaRandom } from 'react-icons/fa'
import { FaRepeat } from 'react-icons/fa6'

export const MusicSettingsComponent: FunctionComponent<IMusicSettingsComponent> = ({ setOpenModal }) => {
  return (
    <div className="flex items-center gap-4">
      <FaRepeat className="cursor-pointer hover:text-root-violet-default transition" size={35} />
      <FaRandom className="cursor-pointer hover:text-root-violet-default transition" size={35} />
      <PiMusicNotesPlusFill onClick={() => setOpenModal(true)} className="cursor-pointer hover:text-root-violet-default transition" size={35} />
    </div>
  )
}