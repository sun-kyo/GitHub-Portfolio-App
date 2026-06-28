import { Text, View } from 'react-native';

import { GithubRepo } from '@/src/types/github';

interface RepoCardProps {
  repo: GithubRepo;
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <View>
      <Text>{repo.name}</Text>

      <Text>{repo.description}</Text>

      <Text>⭐ {repo.stargazers_count}</Text>
    </View>
  );
}
