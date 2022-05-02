/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps } from 'next'

import { User } from '../entity/User';
import { api } from '../util/request';

import styles from '../styles/home.module.css';
import usePushUsers from '../services/pushUsers';
import { useRouter } from 'next/router';
import { FormEvent, useCallback, useRef } from 'react';
import useLoadUserData from '../services/loadUsers';

type ComponentProps = {
  users: User;
}

const MAX_ITEMS = 12;

export default function Home({ users }: ComponentProps) {
  const router = useRouter();
  const { pushUsers } = usePushUsers();
  const { loadUserData } = useLoadUserData();
  const searchInputRef = useRef<HTMLInputElement>(null);

  if (typeof window !== 'undefined') {
    pushUsers(users);
  }

  const handleClick = useCallback((id: string) => {
    router.push(`/${id}`)
  }, [router]);

  const handleSearch = useCallback((event: FormEvent) => {
    event.preventDefault();
    const { userCache } = loadUserData();
    const value = searchInputRef.current?.value;

    const user = userCache.users.find(user => {
      const [first] = value?.split(' ') as string[];
      return user.name.first === first || user.name.last === first;
    });

    if (user) {
      const id = user.login.uuid;
      return router.push(`/${id}`)
    }
  }, [loadUserData, router]);

  const userNames = users.results.map(user => {
    return {
      id: user.login.uuid,
      image: user.picture.large,
      firstName: user.name.first,
      lastName: user.name.last
    }
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Clique em um usuário para visualizar os detalhes</h1>
      <input
        type="search"
        placeholder='Buscar um nome'
        ref={searchInputRef}
      />
      <button 
        onClick={handleSearch}
        className={styles.searchButton}
        >
        Buscar
      </button>
      <ul className={styles['users-list']}>
        {
          userNames?.map(user => {
            return (
              <li key={user.id}>
                <img
                  src={user.image}
                  alt={`Image do usuário ${user.firstName}`}
                />
                <button onClick={() => handleClick(user.id)} >{user.firstName} {user.lastName}</button>
              </li>
            )
          })
        }
      </ul>
    </div>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<ComponentProps>('/list',
    { params: { results: MAX_ITEMS } }
  );
  return {
    props: {
      users: data.users
    },
    revalidate: 10,
  };
}
