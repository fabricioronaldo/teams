import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';



export function Group() {

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header />
      <Highlight 
        title="Turma"
        subtitle="Jogue com a sua" 
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item }
        renderItem={({ item }) => (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Vamos cadastrar a primeira turma?"
          />
        )}
      />
      <Button 
        title="Criar uma nova turma"
        onPress={handleNewGroup}
      />    
    </Container>
    
  )
}