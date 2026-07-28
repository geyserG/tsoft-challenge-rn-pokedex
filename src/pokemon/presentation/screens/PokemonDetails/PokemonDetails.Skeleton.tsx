import { ScrollView, View } from 'react-native';
import { Skeleton } from '../../../../shared/components';
import { styles } from './styles';

const STAT_SKELETON_ITEMS = 6;

const PokemonDetailsSkeleton = () => {
  return (
    <ScrollView>
      <Skeleton accessibilityLabel="Cargando detalles del pokémon">
        <View style={styles.skeletonItemWithMarginBottom}>
          <View style={styles.header}>
            <View style={styles.skeletonMetaData}>
              {Array.from({ length: 3 }, (_, index) => (
                <View key={index} style={styles.skeletonMetaDataItem}>
                  <Skeleton.Item height={18} width={64} />
                  <Skeleton.Item height={16} width={88} />
                </View>
              ))}
            </View>
            <Skeleton.Item borderRadius={150} height={260} width={260} />
          </View>
        </View>

        <View style={styles.skeletonContent}>
          <Skeleton.Item height={56} style={styles.skeletonTitle} width="55%" />

          <View style={styles.othersMetaData}>
            <Skeleton.Item height={44} width={110} />
            <Skeleton.Item height={44} width={140} />
          </View>

          <View style={styles.description}>
            <View style={styles.skeletonItemWithMarginBottom}>
              <Skeleton.Item height={18} width={100} />
            </View>
            <View style={styles.skeletonItemWithMarginBottom}>
              <Skeleton.Item height={16} width="100%" />
            </View>
            <View style={styles.skeletonItemWithMarginBottom}>
              <Skeleton.Item height={16} width="85%" />
            </View>
          </View>

          <View style={styles.statsSection}>
            <Skeleton.Item height={32} width={150} />
            <View style={styles.statsList}>
              {Array.from({ length: STAT_SKELETON_ITEMS }, (_, index) => (
                <View key={index} style={styles.statRow}>
                  <Skeleton.Item
                    borderRadius={999}
                    height={10}
                    style={styles.statProgress}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </Skeleton>
    </ScrollView>
  );
};

export default PokemonDetailsSkeleton;
