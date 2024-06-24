import useRecordingsList from '@/shared/hooks/recorder/recorder-list.hook.ts'
import { FaTrashAlt } from 'react-icons/fa'
import { Button } from 'flowbite-react'
import { FunctionComponent } from 'react'
import { RecorderListComponent } from '@types'

export const RecordingListComponent: FunctionComponent<RecorderListComponent> = ({ audio }) => {
  const { recordings, deleteAudio } = useRecordingsList(audio);

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
                <Button
                  color="primal"
                  onClick={() => deleteAudio(record.key)}
                >
                  <FaTrashAlt size={25} />
                </Button>
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