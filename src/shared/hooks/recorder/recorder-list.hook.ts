import { useState, useEffect } from 'react';
import { deleteAudio } from '@/shared/handlers/recorder-list.handler.ts'
import generateKey from '@/shared/utils/generate-key.util.ts'
import { IRecordings } from '@types'

export default function useRecordingsList(audio: Blob | null) {
  const [recordings, setRecordings] = useState<IRecordings[]>([]);

  useEffect(() => {
    if (audio)
      setRecordings((prevState) => {
        return [...prevState, { key: generateKey(), audio }];
      });
  }, [audio]);

  return {
    recordings,
    deleteAudio: (audioKey: string) => deleteAudio(audioKey, setRecordings),
  };
}