export interface SNSNotification {
  id: string;
  title: string;
  body: string;
  messageId: string;
  timestamp: number;
  data: Record<string, any>;
  raw: any;
  read: boolean;
}

export interface FirebaseToken {
  token: string;
  refreshedAt: number;
}
