import { v4 as uuidV4 } from 'uuid';

class User {
  id?: string;
  name: string;
  email: string;
  created_at?: Date = new Date();
  updated_at?: Date = new Date();
  admin?: boolean = false;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
