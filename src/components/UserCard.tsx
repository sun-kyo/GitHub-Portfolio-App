import { Image, Text, View } from 'react-native';
import { GithubUser } from '../types/github';
import { styles } from '../styles/user-card.styles';

interface UserCardProps {
  user: GithubUser;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />

      <Text style={styles.name}>{user.name}</Text>

      <Text style={styles.login}>@{user.login}</Text>

      {user.bio && <Text style={styles.bio}>{user.bio}</Text>}

      <View style={styles.infoContainer}>
        <Text>Followers: {user.followers}</Text>

        <Text>Following: {user.following}</Text>

        <Text>Repositories: {user.public_repos}</Text>
      </View>
    </View>
  );
}
