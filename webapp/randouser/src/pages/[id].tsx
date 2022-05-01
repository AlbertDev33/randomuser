/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import useLoadUserData from "../services/loadUsers";

import styles from '../styles/userData.module.css';

export default function Details() {
    const { loadUserData } = useLoadUserData();
    const { userCache } = loadUserData();
    const router = useRouter();

    const [user, setUser] = useState({} as any)

    const findUser = useCallback(() => {
        const findUser = userCache.users.find(user => {
            return user.login.uuid === router.query.id;
        });
        if (!findUser) {
            router.push('/');
        }
        setUser(findUser as any);
    }, [router, userCache]);

    useEffect(() => {
        findUser();
    }, []);

    const handleClick = useCallback(() => {
        router.push('/');
    }, [router]);

    return !!user && (
        <div className={styles.container}>
            <h1 className={styles.title}>Detalhes do Usuário</h1>
            <img
                src={user?.picture?.large}
                alt={`Image do usuário ${user?.name?.first}`}
            />
            <div className={styles.userProfile}>
                <label>{'Nome Completo: '} {user?.name?.first} {user?.name?.last}</label>
                <label>{'E-mail: '} {user?.email} </label>
                <label>{'Telefone:'} {user?.cell}</label>
                <label>{'Endereço:'}</label>
                <label>{'Rua:'} {user?.location?.street?.name} </label>
                <label>{'Número:'} {user?.location?.street?.number} </label>
                <label>{'Cidade:'} {user?.location?.city}</label>
                <button className={styles.routeButton} onClick={handleClick}>Retornar</button>
            </div>
        </div>

    )
}