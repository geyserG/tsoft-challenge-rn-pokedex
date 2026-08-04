import { createContext, useContext, type PropsWithChildren } from 'react';
import type { GetPokemonByIdUseCase } from '../../features/pokemon/domain/use-cases/GetPokemonByIdUseCase';
import type { GetPokemonListUseCase } from '../../features/pokemon/domain/use-cases/GetPokemonListUseCase';
import { GetPokemonFavoriteListUseCase } from '../../features/pokemon/domain/use-cases/GetPokemonFavoriteListUseCase';
import { addPokemonToFavoriteList } from '../../features/pokemon/domain/use-cases/addPokemonToFavoriteList';

export interface AppDependencies {
  getPokemonList: GetPokemonListUseCase;
  getPokemonById: GetPokemonByIdUseCase;
  getPokemonFavoriteList: GetPokemonFavoriteListUseCase;
  addPokemonToFavoriteList: addPokemonToFavoriteList;
}

const DependenciesContext = createContext<AppDependencies | null>(null);

interface DependenciesProviderProps extends PropsWithChildren {
  dependencies: AppDependencies;
}

export const DependenciesProvider = ({
  dependencies,
  children,
}: DependenciesProviderProps) => {
  return (
    <DependenciesContext.Provider value={dependencies}>
      {children}
    </DependenciesContext.Provider>
  );
};

export const useDependencies = (): AppDependencies => {
  const value = useContext(DependenciesContext);

  if (!value) {
    throw new Error(
      'useDependencies debe utilizarse dentro de DependenciesProvider',
    );
  }

  return value;
};
