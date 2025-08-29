import { supabaseClient } from "../client";
import { SignInData, SignupData } from "@/app/types";
import IUser from "@/app/types/IUser";

// 인증 관련 유틸리티 함수들
const auth = {
  // 로그인
  async signIn({ email, password }: SignInData) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  // 회원가입
  async signUp({ email, password, name, phone, phoneCountry }: SignupData) {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          phone,
          phoneCountry,
        },
        emailRedirectTo: process.env.NEXT_PUBLIC_AUTH_CALLBACK_URL,
      },
    });
    return { data, error };
  },

  // 로그아웃
  async signOut() {
    const { error } = await supabaseClient.auth.signOut();
    return { error };
  },

  // 현재 사용자 가져오기
  async getCurrentUser() {
    const {
      data: { user },
      error,
    } = await supabaseClient.auth.getUser();

    // [TO DO] 타입 정의 필요
    return { user: user as IUser, error };
  },

  // 인증 상태 변경 감지
  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabaseClient.auth.onAuthStateChange(callback);
  },
};

export default auth;
