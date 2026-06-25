import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
  },

  button: {
    borderWidth: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },

  result: {
    marginTop: 20,
    gap: 4,
  },
});
