import React, { FunctionComponent, useState } from 'react'
import { IAlertState, ICreateModal } from '@types'
import { Button, FileInput, Label, Modal, TextInput } from 'flowbite-react'
import { Widget } from '@/widgets';
import { useCreateMusicMutation } from '@/entities/music/model/music.model.ts'

export const AddMusicModal: FunctionComponent<ICreateModal> = ({ openModal, setOpenModal }) => {
  const [request, { isSuccess, isLoading }] = useCreateMusicMutation();
  const [playlistName, setPlaylistName] = useState<string>('')
  const [selectedMusic, setSelectedMusic] = useState<File | undefined>(undefined);
  const [alertObj, setAlertObj] = useState<IAlertState>({
    text: '',
    status: '',
    show: false,
  });

  const saveBtn = () => {
    if (!selectedMusic) {
      return setAlertObj({ text: 'Вставьте музыку', status: 'fail', show: true });
    }

    request({
      namePlayList: playlistName.length ? playlistName : 'All',
      file: selectedMusic
    })
  }

  if (isSuccess) {
    setOpenModal(false)
  }

  const handleMusicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files === null) {
      return setAlertObj({ text: 'Ошибка файла', status: 'fail', show: true })
    }
    const file = e.target.files[0];
    if (file.size > 50 * 1024 * 1024) {
      alert('Файл должен быть не более 50Мб');
      e.target.value = '';
    } else {
      setSelectedMusic(file);
    }
  };

  return (
    <Modal size="4xl" dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Widget.Alert text={alertObj.text} status={alertObj.status} show={alertObj.show} resetShow={() => setAlertObj((prev) => ({ ...prev, show: false }))} />
      <Modal.Header>Добавление новой музыки</Modal.Header>
      <Modal.Body>
        <div>
          <Label htmlFor="upload-music" value="Выберите музыка" />
        </div>
        <FileInput accept=".mp3" onChange={handleMusicChange} id="upload-music" helperText="Mp3 (>50Мб)" />
        <audio
          className="w-full mt-5"
          controls
          src={selectedMusic && URL.createObjectURL(selectedMusic)}
        />
        <div className="mt-2 block">
          <Label htmlFor="playlist-name" value="Название плейлиста" />
        </div>
        <TextInput id="playlist-name" onChange={(e) => setPlaylistName(e.target.value)} value={playlistName} className="mb-2" placeholder="Для объединения (не обязательно)" type="text" sizing="sm" />
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-end">
        <Button onClick={saveBtn} isProcessing={isLoading} size="md" color="purple">
          Создать
        </Button>
      </Modal.Footer>
    </Modal>
  )
}