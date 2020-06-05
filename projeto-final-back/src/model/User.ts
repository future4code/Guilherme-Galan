import { InvalidParameterError } from "../errors/InvalidParameterError";

export class User {
  constructor(
    id: string,
    name: string,
    email: string,
    nickname: string,
    password: string,
    type: UserType,
    description?: string
  ) {}
}

export const stringToUserType = (input: string): UserType => {
  switch (input) {
    case "PAYING":
      return UserType.PAYING;
    case "NONPAYIN":
        return UserType.NONPAYING;
    default:
      throw new InvalidParameterError("Invalid user type");
  } 
};

export enum UserType { 
  PAYING = "PAYING",
  NONPAYING = "NONPAYING" 
}