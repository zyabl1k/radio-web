import { IRecordings } from '@types'
import React from 'react'

export function deleteAudio(audioKey: string, setRecordings: React.Dispatch<React.SetStateAction<IRecordings[]>>) {
  setRecordings((prevState) => prevState.filter((record) => record.key !== audioKey));
}