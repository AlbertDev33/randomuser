import { useCallback } from "react";
import { IUserData } from "../interfaces/IUserData";

const CACHE_NAME = 'users';

export default function useLoadUserData() {
    const loadUserData = useCallback(() => {
        let userCache = {} as IUserData;
        if (typeof window !== 'undefined') {
            userCache = JSON.parse(localStorage.getItem(CACHE_NAME) || '{}');
        }
        return { userCache };
    }, []);

    return { loadUserData };
}