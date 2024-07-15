import { Message } from "@/models/User.model";

export interface ApiResponse{
    success: boolean;
    message: String;
    isAcceptingMessage?: boolean;
    messages?: Array<Message>
}