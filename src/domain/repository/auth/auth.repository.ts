import type { UserCredential } from "firebase/auth";

export abstract class AuthRepository {
  abstract signInEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential>;
  abstract registerUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential>;
  //cerrar sesion
  abstract logout(): Promise<void>;
}
