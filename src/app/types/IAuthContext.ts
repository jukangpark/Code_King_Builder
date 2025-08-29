import { SignInData, SignupData } from "./Auth";
import { User } from "./IUser";

interface IAuthContext {
  user: User | null;
  loading: boolean;
  signIn: (signInUser: SignInData) => Promise<{ error: any }>;
  signUp: (signUpUser: SignupData) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
}

export default IAuthContext;
