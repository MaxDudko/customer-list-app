export class CreateUserDTO {
  readonly login: string;
  readonly password: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone: string;
  readonly position: string;
  readonly info: string;
  readonly created_at: Date;
}
