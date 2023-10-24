import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import User from "./user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import jwtDecode from "jwt-decode";

interface AuthResponse {
  token: string;
}

@Injectable()
export class AuthenticationService {
  private apiUrl = "http://localhost:3000";

  private user: User | null = null;

  private currentUserSubject = new BehaviorSubject<User | null>(null);

  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.extractUserFromToken(token);
    }
  }

  signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Observable<any> {
    const headers = new HttpHeaders({ "Content-type": "application/json" });

    return this.http
      .post(
        `${this.apiUrl}/users`,
        {
          email,
          password,
          firstName,
          lastName,
        },
        { headers }
      )
      .pipe(catchError((error) => Observable.throw(error)));
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post<any>(
        `${this.apiUrl}/users/signin`,
        { email, password },
        { headers }
      )
      .pipe(
        map((response: any) => {
          if (response.token) {
            sessionStorage.setItem("token", response.token);
          }
          return response.user;
        }),
        catchError((error) => Observable.throw(error))
      );
  }

  setUser(user: User | null): void {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }

  logout(): void {
    sessionStorage.removeItem("token");
    window.location.reload();
  }

  getToken(): string | null {
    return sessionStorage.getItem("token");
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  extractUserFromToken(token: string): User | null {
    try {
      const decodedToken: any = jwtDecode(token);

      if (decodedToken && decodedToken.userId && decodedToken.email) {
        const user: User = {
          id: decodedToken.userId,
          email: decodedToken.email,
          password: decodedToken.password,
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
        };
        this.currentUserSubject.next(user);
      }
    } catch (error) {
      console.error("Erro ao decodificar token:", error);
    }

    return null;
  }
}
