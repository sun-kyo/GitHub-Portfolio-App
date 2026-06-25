import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    alignItems: 'center',
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
  },

  login: {
    marginTop: 4,
    color: '#666',
    fontSize: 16,
  },

  bio: {
    marginTop: 12,
    textAlign: 'center',
  },

  infoContainer: {
    marginTop: 20,
    gap: 8,
    alignItems: 'center',
  },
});
