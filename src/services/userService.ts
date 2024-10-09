import { isValidEmail, isValidName, isCapitalized } from "../helpers/validationHelper";
import { UserRepository } from "../repositories/userRepository"; 

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string) {
    if (!isValidName(name)) {
      throw new Error("Nome inválido");
    }
    if (!isCapitalized(name)) {
      throw new Error("O nome deve começar com letra maiúscula");
    }
    if (!isValidEmail(email)) {
      throw new Error("Email inválido");
    }
    return await this.userRepository.addUser(name, email);
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }
}
