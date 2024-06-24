import React from 'react'
import { IRecorderInitialState } from '@types'

export async function startRecording(setRecorderState: React.Dispatch<React.SetStateAction<IRecorderInitialState>>) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    setRecorderState((prevState) => {
      return {
        ...prevState,
        initRecording: true,
        mediaStream: stream,
      };
    });
  } catch (err) {
    console.log(err);
  }
}

export function saveRecording(recorder: MediaRecorder | null) {
  if (recorder && recorder.state !== 'inactive') recorder.stop();
}