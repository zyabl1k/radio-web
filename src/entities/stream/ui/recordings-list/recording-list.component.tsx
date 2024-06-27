import useRecordingsList from '@/shared/hooks/recorder/recorder-list.hook.ts'
import { FaTrashAlt } from 'react-icons/fa'
import { Button } from 'flowbite-react'
import { FunctionComponent } from 'react'
import { ISendLifeSession, RecorderListComponent } from '@types'
import { useSendStreamMutation } from '@/entities/stream/model/stream.model.ts'
import { IoIosSend } from 'react-icons/io'

export const RecordingListComponent: FunctionComponent<RecorderListComponent> = ({ audio }) => {
  const [request] = useSendStreamMutation();
  const { recordings, deleteAudio } = useRecordingsList(audio);

  const handleSend = (file: Blob | null) => {
    if (!file) {
      return null
    }
    if (file.type!== 'audio/mpeg') {
      alert('Only audio/mpeg files are allowed')
      return null
    }
    const data: ISendLifeSession = {
      idController: 0,
      file: file
    }
    request(data)
  }

  return (
    <div className="flex flex-col">
      {recordings.length > 0 ? (
        <>
          <h1 className="mb-2 font-bold text-lg">Ваши записи:</h1>
          <div className="flex flex-col gap-6 bg-root-card-light dark:bg-root-card-dark p-4 rounded">
            {recordings.map((record) => (
              <div className="flex items-center justify-between gap-4" key={record.key}>
                {record.audio && (
                  <audio controls src={window.URL.createObjectURL(record.audio)} />
                )}
                <div className="flex items-center">
                  <Button
                    color="primal"
                    onClick={() => handleSend(record.audio)}
                  >
                    <IoIosSend size={25} />
                  </Button>
                  <Button
                    color="primal"
                    onClick={() => deleteAudio(record.key)}
                  >
                    <FaTrashAlt size={25} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-2xl">У вас еще нет записей</h1>
      )}
    </div>
  );
}