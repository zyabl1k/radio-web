import { saveRecording, startRecording } from '@/shared/handlers/recorder-controls.handler.ts'
import { useEffect, useState } from 'react'
import { __APPLICATION__ } from '@/shared/config'
import { IRecorderController, IRecorderInitialState } from '@types'

export default function useRecorder(): IRecorderController {
  const [recorderState, setRecorderState] = useState<IRecorderInitialState>(__APPLICATION__.constants.recorder);

  useEffect(() => {
    const MAX_RECORDER_TIME = 5;
    let recordingInterval: NodeJS.Timeout | null = null;

    if (recorderState.initRecording) {
      recordingInterval = setInterval(() => {
        setRecorderState(( prevState: IRecorderInitialState )  => {
          if (
            recordingInterval &&
            prevState.recordingMinutes === MAX_RECORDER_TIME &&
            prevState.recordingSeconds === 0
          ) {
            clearInterval(recordingInterval);
            return prevState;
          }

          if (prevState.recordingSeconds >= 0 && prevState.recordingSeconds < 59) {
            return {
              ...prevState,
              recordingSeconds: prevState.recordingSeconds + 1,
            }
          }

          if (prevState.recordingSeconds === 59) {
            return {
              ...prevState,
              recordingMinutes: prevState.recordingMinutes + 1,
              recordingSeconds: 0,
            };
          }
          return prevState
        });
      }, 1000);
    }

    return () => {
      if (recordingInterval) {
        clearInterval(recordingInterval);
      }
    };
  });

  useEffect(() => {
    if (recorderState.mediaStream)
      setRecorderState((prevState) => {
        if(prevState.mediaStream) {
          return {
            ...prevState,
            mediaRecorder: new MediaRecorder(prevState.mediaStream),
          };
        }
        return {
          ...prevState,
          mediaRecorder: null,
        };
      });
  }, [recorderState.mediaStream]);

  useEffect(() => {
    const recorder = recorderState.mediaRecorder;
    let chunks: BlobPart[] = [];

    if (recorder && recorder.state === 'inactive') {
      recorder.start();

      recorder.ondataavailable = (e: BlobEvent) => {
        chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
        chunks = [];

        setRecorderState((prevState: IRecorderInitialState) => {
          if (prevState.mediaRecorder) {
            const newRecorder: IRecorderInitialState = {
              ...__APPLICATION__.constants.recorder,
              audio: blob,
            };
            return newRecorder;
          } else {
            return __APPLICATION__.constants.recorder
          }
        });
      };
    }

    return () => {
      if (recorder) recorder.stream.getAudioTracks().forEach((track: MediaStreamTrack) => track.stop());
    };
  }, [recorderState.mediaRecorder]);

  return {
    recorderState,
    handlers: {
      startRecording: () => startRecording(setRecorderState),
      cancelRecording: () => setRecorderState(__APPLICATION__.constants.recorder),
      saveRecording: () => saveRecording(recorderState.mediaRecorder),
    }
  };
}