import React from 'react';

import { Text } from '../Text';

import * as S from './styles';
import { TouchableOpacity } from 'react-native';

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <S.Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>Bem-vindo(a) ao</Text>
          <Text size={24} weight='700'>
          WAITER
            <Text size={24}>APP</Text>
          </Text>
        </>
      )}

      {selectedTable && (
        <S.Content>
          <S.OrderHeader>
            <Text size={24} weight='600'>Pedido</Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text size={14} weight='600' color="#D73035">
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </S.OrderHeader>

          <S.Table>
            <Text color="#666666">Mesa {selectedTable}</Text>
          </S.Table>
        </S.Content>
      )}
    </S.Container>
  );
}
