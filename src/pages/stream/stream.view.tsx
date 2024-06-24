import { FunctionComponent } from 'react'
import useRecorder from '@/shared/hooks/recorder/recorder.hook.ts'
import { RecorderControlsComponent } from '@/entities/stream/ui/recorder-controls/recorder-controls.component.tsx'
import { RecordingListComponent } from '@/entities/stream/ui/recordings-list/recording-list.component.tsx'

const StreamView: FunctionComponent = () => {
  const { recorderState, handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-2xl">Запись голоса</h1>
      <div className="flex flex-col">
        <RecorderControlsComponent recorderState={recorderState} handlers={handlers} />
        <RecordingListComponent audio={audio} />
      </div>
    </div>
  );
}

export default StreamView;