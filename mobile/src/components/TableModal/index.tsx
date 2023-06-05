import React from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';

import { Text } from '../Text';
import { Close } from '../Icons/Close';

import * as S from './styles';
import { Button } from '../Button';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = React.useState('');

  function handleSave() {
    setTable('');
    onSave(table);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <S.Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <S.ModalBody>
          <S.ModalHeader>
            <Text weight='600'>Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666666' />
            </TouchableOpacity>
          </S.ModalHeader>

          <S.ModalForm>
            <S.Input
              placeholder='Número da mesa'
              placeholderTextColor='#666666'
              keyboardType='number-pad'
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </S.ModalForm>
        </S.ModalBody>
      </S.Overlay>
    </Modal>
  );
}
