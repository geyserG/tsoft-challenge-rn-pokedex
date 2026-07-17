import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pressable: {
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4,
  },
  root: {
    alignItems: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 96,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    flex: 1,
    marginRight: 16,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLayer: {
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    opacity: 0.5,
    borderRadius: 31,
    position: 'absolute',
  },
  image: {
    height: 70,
    width: 70,
  },
});
