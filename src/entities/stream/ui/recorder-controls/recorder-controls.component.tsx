import { formatMinutes, formatSeconds } from '@/shared/utils/format-time.util.ts'
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa'
import { Button } from 'flowbite-react'
import { IoIosClose } from 'react-icons/io'
import { FunctionComponent } from 'react'
import { IRecorderController } from '@types'

export const RecorderControlsComponent: FunctionComponent<IRecorderController> = ({ recorderState, handlers }) => {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-col gap-2">
        {initRecording ? (
          <Button
            className="dark:bg-root-card-dark bg-root-card-light rounded-full p-4 mx-auto"
            color="primal"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            <FaMicrophoneSlash size={50} />
          </Button>
        ) : (
          <Button
            className="dark:bg-root-card-dark bg-root-card-light rounded-full p-4 mx-auto"
            color="primal"
            onClick={startRecording}
          >
            <FaMicrophone size={50} />
          </Button>
        )}
        <div className="flex items-center gap-5 justify-center">
          <div className="flex items-center gap-1">
            <span>{formatMinutes(recordingMinutes)}</span>
            <span>:</span>
            <span>{formatSeconds(recordingSeconds)}</span>
          </div>
          {initRecording && (
            <Button size="sm" color="primal" onClick={cancelRecording}>
              <IoIosClose size={45} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}