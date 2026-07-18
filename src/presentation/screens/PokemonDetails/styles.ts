import { StyleSheet } from 'react-native';
import { primaryColorPokedex } from '../constants';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    experimental_backgroundImage: `linear-gradient(180deg, ${primaryColorPokedex}, ${primaryColorPokedex}, white)`,
    paddingHorizontal: 16,
  },
  image: {
    paddingLeft: 10,
  },
  metaData: {
    margin: 0,
    justifyContent: 'center',
    gap: 16,
  },
  title: { textAlign: 'center' },
  description: {
    paddingHorizontal: 16,
  },
  othersMetaData: {
    padding: 16,
    flexDirection: 'row',
    gap: 16,
  },
  statsSection: {
    gap: 24,
    padding: 16,
    marginBottom: 20,
  },
  statsList: {
    gap: 20,
  },
  statRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  statLabel: {
    width: 150,
  },
  statProgress: {
    flex: 1,
  },
  skeletonMetaData: {
    gap: 20,
  },
  skeletonMetaDataItem: {
    gap: 6,
  },
  skeletonContent: {
    gap: 20,
  },
  skeletonTitle: {
    alignSelf: 'center',
  },
});
