import { Pool } from "pg";
import pool from "../config/database";
import { Product } from "../models/productModel";

export class ProductRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async getAllProducts(): Promise<Product[]> {
    const { rows } = await this.pool.query("SELECT * FROM products");
    return rows;
  }

  async addProduct(name: string, price: number): Promise<Product> {
    const queryText = "INSERT INTO products(name, price) VALUES($1, $2) RETURNING *";
    const { rows } = await this.pool.query(queryText, [name, price]);
    return rows[0];
  }
}
