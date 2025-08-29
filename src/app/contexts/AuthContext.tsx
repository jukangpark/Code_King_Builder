"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "@/lib/supabase/api/auth";
import IUser from "@/app/types/IUser";
import { SignInData, SignupData } from "@/app/types/Auth";
import IAuthContext from "@/app/types/IAuthContext";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 초기 사용자 상태 확인
    const checkUser = async () => {
      try {
        const { user } = await auth.getCurrentUser();
        setUser(user);
      } catch (error) {
        console.error("Error checking user:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // 인증 상태 변경 감지
    const {
      data: { subscription },
    } = auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (signInUser: SignInData) => {
    const { error } = await auth.signIn(signInUser);
    return { error };
  };

  const signUp = async (signUpUser: SignupData) => {
    const { error } = await auth.signUp(signUpUser);
    return { error };
  };

  const signOut = async () => {
    const { error } = await auth.signOut();
    return { error };
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
