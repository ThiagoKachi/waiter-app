import { useState } from 'react';
import { FlatList } from 'react-native';

import { Text } from '../Text';
import { Category } from '../../types/Category';

import * as S from './styles';

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <S.Category onPress={() => handleSelectCategory(category._id)}>
            <S.Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </S.Icon>

            <Text size={14} weight='600' opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </S.Category>
        );
      }}
    />
  );
}
