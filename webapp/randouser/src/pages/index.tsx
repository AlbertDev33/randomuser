import type { GetStaticProps } from 'next'

import { User } from '../entity/User';
import { api } from '../util/request';

import styles from '../styles/home.module.css';
import usePushUsers from '../services/pushUsers';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

type ComponentProps = {
  users: User;
}

const MAX_ITEMS = 12;

export default function Home({ users }: ComponentProps) {
  const router = useRouter();
  const { pushUsers } = usePushUsers();

  const handleClick = useCallback((id: string) => {
    router.push(`/${id}`)
  }, [router]);

  const userNames = users.results.map(user => {
    return {
      id: user.login.uuid,
      image: user.picture.large,
      firstName: user.name.first,
      lastName: user.name.last
    }
  });
  if (typeof window !== 'undefined') {
    pushUsers(users);
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Clique em um usuário para visualizar os detalhes</h1>
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
