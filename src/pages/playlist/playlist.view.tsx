import { FunctionComponent } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { PlaylistComponent } from '@/entities/playlist/ui/playlist/playlist.component.tsx'

const PlaylistView: FunctionComponent = () => {
  const navigate = useNavigate();
  const { name, id } = useParams()

  return (
    <div className="w-full">
      <Button
        color="primal"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowRoundBack size={55} />
      </Button>
      <PlaylistComponent id={Number(id)} name={String(name)} />
    </div>
  )
}

export default PlaylistView