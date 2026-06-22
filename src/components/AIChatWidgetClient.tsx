"use client";

import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import {
  trackBookCallClick,
  trackChatLeadCapture,
  trackWhatsAppClick,
} from "@/lib/analytics";
import { aiChatContent, contact, services } from "@/lib/site";

type ChatMessage = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

type LeadValues = {
  name: string;
  contact: string;
  need: string;
};

const quickQuestions = [
  "What services do you offer?",
  "How do I get started?",
  "Can I book a free call?",
  "Can you help with AI automation?",
];

const initialLead: LeadValues = {
  name: "",
  contact: "",
  need: "",
};

function getLocalResponse(question: string) {
  const normalizedQuestion = question.toLowerCase();

  // TODO: Replace this local response helper with a real AI API, RAG endpoint,
  // or chatbot platform once the production assistant is ready.
  if (normalizedQuestion.includes("service")) {
    return `Syncore can help with ${services
      .map((service) => service.title)
      .join(", ")}. The goal is simple: attract, convert, and keep more customers.`;
  }

  if (
    normalizedQuestion.includes("get started") ||
    normalizedQuestion.includes("start")
  ) {
    return "The best first step is a free consultation. We learn your goals, map the quickest growth opportunities, then recommend the right service mix.";
  }

  if (
    normalizedQuestion.includes("book") ||
    normalizedQuestion.includes("call")
  ) {
    return "Yes. Use the Book a call button here and choose a time that works for you.";
  }

  if (
    normalizedQuestion.includes("ai") ||
    normalizedQuestion.includes("automation")
  ) {
    return "Yes. We build AI call agents, chatbots, and custom workflows that reduce busywork, qualify leads, and help your team respond faster.";
  }

  return "Good question. Share your name, email or WhatsApp, and what you need, and Syncore can point you in the right direction.";
}

export function AIChatWidgetClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeting, setHasGreeting] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [leadValues, setLeadValues] = useState<LeadValues>(initialLead);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const openChat = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => {
      toggleButtonRef.current?.focus();
    });
  }, []);

  const latestMessageId = useMemo(
    () =>
      messages.reduce((highestId, message) => {
        return Math.max(highestId, message.id);
      }, 0),
    [messages],
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMessages((currentMessages) => {
        if (currentMessages.length > 0) {
          return currentMessages;
        }

        return [{ id: 1, sender: "bot", text: aiChatContent.greeting }];
      });
      setHasGreeting(true);
    }, 2800);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeChat();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const focusable = Array.from(focusableElements ?? []).filter(
        (element) => element.offsetParent !== null,
      );

      if (focusable.length === 0) {
        return;
      }

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeChat, isOpen]);

  useEffect(() => {
    const messageList = panelRef.current?.querySelector(
      "[data-chat-messages]",
    );

    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages]);

  const submitQuestion = (question: string) => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: latestMessageId + 1,
        sender: "user",
        text: trimmedQuestion,
      },
      {
        id: latestMessageId + 2,
        sender: "bot",
        text: getLocalResponse(trimmedQuestion),
      },
    ]);
    setDraft("");
    setHasGreeting(true);
  };

  const handleQuestionSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitQuestion(draft);
  };

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLeadSubmitted(true);
    trackChatLeadCapture({
      source: "ai_chat_widget",
      need_provided: Boolean(leadValues.need.trim()),
      need_length: leadValues.need.trim().length,
    });

    // TODO: Send captured chat leads to the contact API, CRM, or chatbot
    // platform when the production integration is ready.
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: latestMessageId + 3,
        sender: "bot",
        text: `Thanks, ${leadValues.name || "there"}. ${aiChatContent.leadCapturedMessage}`,
      },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[65] sm:bottom-6 sm:right-6">
      {hasGreeting && !isOpen && (
        <button
          type="button"
          onClick={openChat}
          aria-label="Open Syncore chat from greeting"
          className="animated-gradient-border mb-3 max-w-[calc(100vw-5.5rem)] rounded-2xl border border-white/14 bg-brand-charcoal px-4 py-3 text-left text-sm font-semibold leading-6 text-brand-white shadow-2xl transition hover:-translate-y-1 hover:border-brand-cyan sm:max-w-[18rem]"
        >
          {aiChatContent.greeting}
        </button>
      )}

      {isOpen && (
        <div
          ref={panelRef}
          id="syncore-ai-chat"
          className="animated-gradient-border mb-4 flex max-h-[min(42rem,calc(100vh-6.5rem))] w-[calc(100vw-2rem)] max-w-[24rem] flex-col overflow-hidden rounded-[1.25rem] border border-white/12 bg-brand-white shadow-2xl sm:w-[calc(100vw-2.5rem)] sm:max-w-[25rem] sm:rounded-[1.5rem]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="syncore-chat-title"
        >
          <div className="relative overflow-hidden bg-brand-charcoal p-5 text-brand-white">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgb(0_188_212/0.28),transparent_12rem),radial-gradient(circle_at_85%_18%,rgb(176_74_226/0.22),transparent_13rem)]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="neon-icon flex size-11 items-center justify-center rounded-2xl text-brand-cyan">
                  <Bot aria-hidden="true" size={22} strokeWidth={2.3} />
                </span>
                <div>
                  <p
                    id="syncore-chat-title"
                    className="font-heading text-base font-extrabold text-brand-white"
                  >
                    Syncore Assistant
                  </p>
                  <p className="text-xs font-semibold text-white/60">
                    {aiChatContent.status}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeChat}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-brand-white transition hover:border-brand-cyan hover:text-brand-cyan"
                aria-label="Close Syncore chat"
              >
                <X aria-hidden="true" size={20} strokeWidth={2.4} />
              </button>
            </div>
          </div>

          <div
            className="max-h-64 space-y-3 overflow-y-auto bg-brand-surface p-4"
            data-chat-messages
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.sender === "user"
                      ? "bg-brand-charcoal text-brand-white"
                      : "border border-brand-border bg-brand-white text-brand-muted shadow-[0_0.75rem_1.8rem_rgb(33_33_33/5%)]"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3 overflow-y-auto border-t border-brand-border bg-brand-white p-4">
            <div className="grid gap-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => submitQuestion(question)}
                  className="min-h-11 rounded-full border border-brand-border bg-brand-surface px-3 py-2 text-left text-xs font-bold text-brand-charcoal transition hover:-translate-y-0.5 hover:border-brand-cyan hover:bg-brand-white hover:shadow-[0_0.75rem_1.5rem_rgb(0_188_212/10%)]"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={handleQuestionSubmit} className="flex gap-2">
              <label className="sr-only" htmlFor="syncore-chat-question">
                Ask Syncore a question
              </label>
              <input
                ref={inputRef}
                id="syncore-chat-question"
                className="form-field min-h-11 flex-1 rounded-full px-4 py-2 text-sm"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder={aiChatContent.placeholders.question}
              />
              <button
                type="submit"
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-cyan text-brand-charcoal transition hover:brightness-105"
                aria-label="Send chat message"
              >
                <Send aria-hidden="true" size={18} strokeWidth={2.4} />
              </button>
            </form>

            <form
              onSubmit={handleLeadSubmit}
              className="rounded-2xl border border-brand-border bg-brand-surface p-3 shadow-[inset_0_1px_0_rgb(255_255_255/0.7)]"
            >
              <p className="font-heading text-sm font-extrabold text-brand-charcoal">
                Want us to follow up?
              </p>
              <div className="mt-3 grid gap-2">
                <label className="sr-only" htmlFor="chat-lead-name">
                  Name
                </label>
                <input
                  id="chat-lead-name"
                  className="form-field min-h-11 rounded-xl px-3 py-2 text-sm"
                  value={leadValues.name}
                  onChange={(event) =>
                    setLeadValues((currentValues) => ({
                      ...currentValues,
                      name: event.target.value,
                    }))
                  }
                  placeholder={aiChatContent.placeholders.name}
                  required
                />
                <label className="sr-only" htmlFor="chat-lead-contact">
                  Email or WhatsApp
                </label>
                <input
                  id="chat-lead-contact"
                  className="form-field min-h-11 rounded-xl px-3 py-2 text-sm"
                  value={leadValues.contact}
                  onChange={(event) =>
                    setLeadValues((currentValues) => ({
                      ...currentValues,
                      contact: event.target.value,
                    }))
                  }
                  placeholder={aiChatContent.placeholders.contact}
                  required
                />
                <label className="sr-only" htmlFor="chat-lead-need">
                  What they need
                </label>
                <textarea
                  id="chat-lead-need"
                  className="form-field min-h-20 rounded-xl px-3 py-2 text-sm"
                  value={leadValues.need}
                  onChange={(event) =>
                    setLeadValues((currentValues) => ({
                      ...currentValues,
                      need: event.target.value,
                    }))
                  }
                  placeholder={aiChatContent.placeholders.need}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-3 min-h-11 w-full px-4 text-sm"
              >
                {leadSubmitted ? "Lead captured locally" : "Capture my details"}
              </button>
            </form>

            <div className="grid gap-2 sm:grid-cols-2">
              <Link
                href={contact.calendly}
                className="btn btn-primary min-h-11 px-4 text-sm"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackBookCallClick({ location: "ai_chat_widget" })
                }
              >
                Book a call
                <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2.4} />
              </Link>
              <Link
                href={contact.whatsapp}
                className="btn btn-secondary min-h-11 px-4 text-sm"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackWhatsAppClick({ location: "ai_chat_widget" })
                }
              >
                Continue on WhatsApp
                <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <button
        ref={toggleButtonRef}
        type="button"
        onClick={isOpen ? closeChat : openChat}
        className="ml-auto flex size-14 items-center justify-center rounded-full bg-brand-gradient text-brand-white shadow-[0_1.25rem_3rem_rgb(0_188_212/28%),0_0_2rem_rgb(176_74_226/18%)] transition hover:-translate-y-1 hover:shadow-[0_1.5rem_3.5rem_rgb(0_188_212/34%),0_0_2.5rem_rgb(176_74_226/22%)] focus-visible:outline-brand-cyan sm:size-16"
        aria-label={isOpen ? "Close Syncore chat" : "Open Syncore chat"}
        aria-controls="syncore-ai-chat"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X aria-hidden="true" size={25} strokeWidth={2.5} />
        ) : (
          <MessageCircle aria-hidden="true" size={27} strokeWidth={2.5} />
        )}
        <Sparkles
          aria-hidden="true"
          className="absolute -right-1 -top-1 rounded-full bg-brand-charcoal p-1 text-brand-cyan"
          size={23}
          strokeWidth={2.4}
        />
      </button>
    </div>
  );
}
