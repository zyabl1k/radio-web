import React, { FunctionComponent, useRef, useState } from 'react'
import { Button, FileInput, Label, Modal, TextInput } from 'flowbite-react'
import { ICreateModal, ICreatePlaylist } from '@types'
import { __APPLICATION__ } from '@/shared/config'
import { MdDelete } from 'react-icons/md'
import { useCreatePlaylistMutation } from '@/entities/playlist/model/playlist.model.ts'
import { Widget } from '@/widgets'

export const PlaylistCreateModal: FunctionComponent<ICreateModal> = ({ openModal, setOpenModal }) => {
  const [request, { isSuccess }] = useCreatePlaylistMutation()
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [alertObj, setAlertObj] = useState({
    text: '',
    status: '',
    show: false,
  })
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file);
  };

  const handleDeleteAvatar = () => {
    setSelectedFile(undefined);
    fileInputRef.current!.value = '';
  };

  const handleSendPlaylist = () => {
    if (!name.length || !description.length) {
      return setAlertObj({
        text: 'Данные плейлиста отсутствуют',
        status: 'fail',
        show: true,
      })
    }
    const data: ICreatePlaylist = {
      name: name,
      description: description,
      file: selectedFile
    }
    request(data)
  }

  if(isSuccess) {
    setOpenModal(false)
  }

  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Widget.Alert
        text={alertObj.text}
        status={alertObj.status}
        show={alertObj.show}
        resetShow={() => setAlertObj((prev) => ({ ...prev, show: false }))}
      />
      <Modal.Header>Создать плейлист</Modal.Header>
      <Modal.Body>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Название плейлиста" />
        </div>
        <TextInput
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Название"
          required
          maxLength={25}
        />

        <div className="mt-4 mb-2 block">
          <Label htmlFor="description" value="Описание плейлиста" />
        </div>
        <TextInput
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание"
          required
          maxLength={30}
        />
        <div className="mb-2 mt-4 block">
          <Label htmlFor="file" value="Выберите фото" />
        </div>
        <FileInput id="file" onChange={handleFileChange} ref={fileInputRef} helperText="Вы можете поставить фото для своего плейлиста (но это не обязательно)" />
        <div className="min-w-[220px] group relative max-w-[220px] mt-5 mx-auto">
          <div className="relative group">
            <img
              className="group-hover:blur-sm transition w-[220px] h-[220px] rounded"
              src={selectedFile ? URL.createObjectURL(selectedFile) : __APPLICATION__.imgHolderUrl}
              alt="Selected image"
            />
            <MdDelete size={45} onClick={handleDeleteAvatar} className="text-red-500 transition hidden group-hover:block absolute top-6 left-4 cursor-pointer hover:text-red-700" />
          </div>
          <div className="flex flex-col items-start justify-start text-start">
            <div className="flex items-center justify-between">
              <h1 className="font-bold mt-2 text-xl">{name}</h1>
            </div>
            <h2 className="text-stone-500 font-thin text-sm">{description}</h2>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-end">
        <Button onClick={handleSendPlaylist}>Сохранить</Button>
      </Modal.Footer>
    </Modal>
  )
}