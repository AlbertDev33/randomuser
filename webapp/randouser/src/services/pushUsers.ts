import { useCallback } from "react";
import { User } from "../entity/User";

const CACHE_NAME = 'users';

export default function usePushUsers() {
    const pushUsers = useCallback((users: User) => {
        localStorage.setItem(CACHE_NAME, JSON.stringify({users: users.results}));
    }, []);

    return { pushUsers };
}