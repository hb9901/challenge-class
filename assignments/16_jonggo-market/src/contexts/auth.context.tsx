"use client";

import { User } from "@supabase/supabase-js";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase.context";

type AuthContextValue = {
  user?: User | null;
  isInitialized: boolean;
  isLoggedIn: boolean;
};

const initialValue: AuthContextValue = {
  user: null,
  isInitialized: false,
  isLoggedIn: false,
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [user, setUser] = useState<AuthContextValue["user"]>(null);
  const isLoggedIn = !!user;

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (event === "INITIAL_SESSION") {
        setUser(session?.user || null);
        // handle initial session
      } else if (event === "SIGNED_IN") {
        setUser(session!.user);
        // handle sign in event
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        // handle sign out event
      } else if (event === "PASSWORD_RECOVERY") {
        // handle password recovery event
      } else if (event === "TOKEN_REFRESHED") {
        // handle token refreshed event
      } else if (event === "USER_UPDATED") {
        // handle user updated event
        setUser(session!.user);
      }

      setIsInitialized(true);
    });
  }, []);
  //서버에 요청을 보내고, 요청의 결과값으로 로그인 결과를 화면에 보여줘야함

  const value = { isInitialized, isLoggedIn, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
