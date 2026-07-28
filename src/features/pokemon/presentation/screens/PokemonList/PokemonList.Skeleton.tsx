import { Skeleton } from '../../../../../shared/components';
import { styles } from './PokemonList.styles';

export const SkeletonContent = () => (
  <Skeleton>
    {Array.from({ length: 20 }, (_, index) => (
      <Skeleton.Item
        height={100}
        borderRadius={15}
        style={styles.skeletonItemContent}
        key={`skeleton-${index}`}
      />
    ))}
  </Skeleton>
);
