export class Message {
  content: string;
  username: string;

  userId?: string;

  constructor(content: string, username: string, userId?: string) {
    this.content = content;
    this.userId = userId;
    this.username = username;
  }
}
