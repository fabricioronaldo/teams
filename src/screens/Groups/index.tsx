import { useState } from 'react';
import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { Container, Title } from './styles';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';


export function Group() {

  const [groups, setGroups] = useState<string[]>(['Galera de São Gonçalo','Galera de Araruama']);

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

    </Container>
    
  )
}