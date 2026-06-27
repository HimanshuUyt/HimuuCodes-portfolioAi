// components/chatbot/types.ts

/* -------------------------------------------------------------------------- */
/*                                  Messages                                  */
/* -------------------------------------------------------------------------- */

export type MessageRole = "user" | "assistant";

export type MessageStatus =
  | "sending"
  | "sent"
  | "error";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date | string;
  status?: MessageStatus;
}

/* -------------------------------------------------------------------------- */
/*                                Suggestions                                 */
/* -------------------------------------------------------------------------- */

export interface SuggestedQuestion {
  id: string;
  text: string;
}

/* -------------------------------------------------------------------------- */
/*                                   API                                      */
/* -------------------------------------------------------------------------- */

export interface ChatApiRequest {
  message: string;
  history: ChatMessage[];
}

export interface ChatApiResponse {
  success: boolean;
  response: string;
  error?: string;
}

/* -------------------------------------------------------------------------- */
/*                                  State                                     */
/* -------------------------------------------------------------------------- */

export interface ChatState {
  isOpen: boolean;
  isTyping: boolean;
  messages: ChatMessage[];
}

/* -------------------------------------------------------------------------- */
/*                                  Voice                                     */
/* -------------------------------------------------------------------------- */

export interface VoiceRecognitionResult {
  transcript: string;
  isFinal: boolean;
}

/* -------------------------------------------------------------------------- */
/*                                   Props                                    */
/* -------------------------------------------------------------------------- */

export interface AIChatProps {
  className?: string;
}

export interface ChatLauncherProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface ChatWindowProps {
  messages: ChatMessage[];
  loading?: boolean;
  onSuggestionClick?: (question: string) => void;
}

export interface ChatHeaderProps {
  onClose: () => void;
}

export interface ChatMessageProps {
  message: ChatMessage;
}

export interface ChatInputProps {
    onSend: (message: string) => void | Promise<void>;
    loading?: boolean;
    disabled?: boolean;
}

export interface VoiceButtonProps {
  onTranscript: (text: string) => void;
  disabled?: boolean;
}

export interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

export interface MarkdownRendererProps {
  content: string;
}

export interface TypingIndicatorProps {
  text?: string;
}