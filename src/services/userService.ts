import { UserRepository } from "../repositories/userRepository";
import {
  isValidEmail,
  isValidName,
  isCapitalized,
} from "../helpers/validationHelper";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string) {
    if (!isValidName(name)) {
      throw new Error(
        "O nome deve conter pelo menos 3 caracteres e apenas letras",
      );
    }
    if (!isCapitalized(name)) {
      throw new Error("O nome deve começar com uma letra maiúscula");
    }
    if (!isValidEmail(email)) {
      throw new Error("Email inválido");
    }
    return await this.userRepository.addUserWithoutPassword(name, email);
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }
}
